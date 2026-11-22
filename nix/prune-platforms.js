// Removes packages from node_modules that declare an os, cpu or libc which
// does not match the current machine. Usage: node prune-platforms.js <dir>
import { existsSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const libc = process.report.getReport().header.glibcVersionRuntime ? 'glibc' : 'musl';

function matches(allowed, value) {
	if (!allowed) return true;
	const negated = allowed.filter((entry) => entry.startsWith('!'));
	if (negated.includes(`!${value}`)) return false;
	return negated.length === allowed.length || allowed.includes(value);
}

function prune(nodeModules) {
	for (const entry of readdirSync(nodeModules)) {
		const path = join(nodeModules, entry);
		if (entry.startsWith('@')) {
			prune(path);
			continue;
		}
		const manifest = join(path, 'package.json');
		if (!existsSync(manifest)) continue;
		const { os, cpu, libc: libcs } = JSON.parse(readFileSync(manifest, 'utf8'));
		if (
			!matches(os, process.platform) ||
			!matches(cpu, process.arch) ||
			(process.platform === 'linux' && !matches(libcs, libc))
		) {
			rmSync(path, { recursive: true });
		} else if (existsSync(join(path, 'node_modules'))) {
			prune(join(path, 'node_modules'));
		}
	}
}

prune(process.argv[2]);
