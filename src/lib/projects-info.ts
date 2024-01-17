export interface ProjectInfo {
	name: string;
	description: string;
	technologies?: (
		| {
				name: string;
				description?: string;
				link?: string;
				markdowned?: { name?: boolean; description?: boolean };
		  }
		| string
	)[];
	additionalDescription?: string;
	links: {
		github?: boolean;
		readTheDocs?: boolean;
	};
	markdowned?: {
		description?: boolean;
		additionalDescription?: boolean;
	};
}

const projectsInfo: ProjectInfo[] = [
	{
		name: 'mcstatus',
		description:
			"Python library to ping and get status from Minecraft servers. It doesn't just return you `ok` or `not ok`, you can also get the server icon, description, player count, etc. Interesting that this library is mostly used by Discord bot developers (even I found this library because I wanted a Discord bot for my Minecraft server, what a perfect use case).\nI have been a core maintainer of the library for almost a year now and have added a lot of new stuff there. One of my biggest contributions was the first one, I [rewrote](https://github.com/py-mine/mcstatus/pull/306) the entire system of interaction between the library and users using [dataclasses](https://docs.python.org/3/library/dataclasses.html) (if you are not familiar what it is, it is just a simpler, faster way to write simple classes that only store data; much nicer and typed than dicts; everyone should try it). Since this rewrite took a lot of time, it so happened that I made many other contributions to this library and became a maintainer!\nAnd one more interesting fact: the library was created by [Dinnerbone](https://minecraft.wiki/w/Nathan_Adams), who is a technical director at Mojang Studios now, [13 years ago](https://github.com/py-mine/mcstatus/commit/b463a4b9196d7e34883be33a4322e095b1073a41).",
		technologies: [
			{
				name: 'dnspython',
				description: 'for DNS SRV record lookup',
				link: 'https://dnspython.readthedocs.io/en/latest/'
			},
			{
				name: 'pyright',
				description:
					"linter for supporting statically typed Python. Much faster than [mypy](https://www.mypy-lang.org/) because it is written in Node.js. See [this document](https://github.com/microsoft/pyright/blob/main/docs/mypy-comparison.md) if you are interesting in how it is different from mypy, [this GitHub issue](https://github.com/py-mine/mcstatus/issues/699) to read why we don't use mypy and [this page](https://www.google.com/search?q=what+is+typed+python) to know what is typed Python",
				link: 'https://github.com/microsoft/pyright#readme',
				markdowned: { description: true }
			},
			{
				name: 'and all other features from [python-template](/python-template)',
				markdowned: { name: true }
			}
		],
		additionalDescription:
			'**Features of the library made by me:**\n' +
			'- Rewriting of response objects to the latest system using the [`dataclasses`](https://docs.python.org/3/library/dataclasses.html) module (**[#306](https://github.com/py-mine/mcstatus/pull/306)**).\n' +
			'- Completely new parsing system for server description (MOTD) (**[#335](https://github.com/py-mine/mcstatus/pull/335)**).\n' +
			'- Documentation (almost from scratch) (**[#477](https://github.com/py-mine/mcstatus/pull/477)**).\n' +
			'- Using the `with` block to open and close connections (**[#422](https://github.com/py-mine/mcstatus/pull/422)**).\n' +
			'- And about [50 other PRs](https://github.com/py-mine/mcstatus/pulls/PerchunPak) that are not important enough to mention here.',
		links: {
			github: true,
			readTheDocs: true
		},
		markdowned: { description: true, additionalDescription: true }
	},
	{
		name: 'pinger-bot',
		description:
			"Discord bot to ping (and collect statistics of) Minecraft servers, which is my main project, where I test new tools, or even architectures.\nIt's my longest project that's still being supported. I started writing it when I have first started programming. It's a Discord bot that receives public information from Minecraft servers and can generate statistics on the number of players. But this is not the most important thing, the most important thing is that it is my testing ground for new ideas and libraries. I often find interesting tools or even ecosystem sites and test them with this bot.",
		technologies: [
			{
				name: 'Hikari-py',
				description: 'library for connecting to Discord',
				link: 'https://www.hikari-py.dev/'
			},
			{
				name: 'APScheduler',
				description: 'for collecting statistics once in a while',
				link: 'https://pypi.org/project/APScheduler/'
			},
			{
				name: 'mcstatus',
				description: 'for getting data from servers',
				link: 'https://mcstatus.readthedocs.io/'
			},
			{
				name: 'SQLAlchemy ORM',
				description:
					'for connecting to the database (I currently support [SQLite](https://sqlite.org/), [MySQL](https://www.mysql.com/) and [PostgreSQL](https://postgresql.org))',
				link: 'https://sqlalchemy.org/',
				markdowned: { description: true }
			},
			{
				name: 'alembic',
				description: 'for database migrations',
				link: 'https://alembic.sqlalchemy.org/'
			},
			{
				name: 'matplotlib',
				description: 'for creating statistics graphs',
				link: 'https://matplotlib.org/'
			},
			{
				name: 'gettext',
				description: 'for translating into different languages',
				link: 'https://docs.python.org/3/library/gettext.html'
			},
			{
				name: 'Babel',
				description: 'for helping in translating',
				link: 'https://babel.pocoo.org/'
			},
			{
				name: 'Docker',
				description: 'for running on my server',
				link: 'https://docker.com/'
			}
		],
		links: {
			github: true,
			readTheDocs: true
		}
	},
	{
		name: 'czech-plus',
		description:
			"As I'm in Czech Republic now, I need to learn Czech fastly. This is why I created an addon for [Anki](https://apps.ankiweb.net)! For me, the addon helps learning and adding new words.\nThis addon helps you (and me actually) to learn new words deeply, add them to your vocabulary, and learn productively. I wrote a whole amount of code to make it work, like tests which are testing like 50 test cases using parametrization and randomization (kind of anti-pattern, but they're kind of impressive too) or custom syntax parsing. So I probably could say, that I wrote a custom non-Turing complete programming language to just study Czech words.",
		technologies: [
			{
				name: 'Lexing',
				description: 'breaking the input text into tokens',
				link: 'https://en.wikipedia.org/wiki/Lexical_analysis'
			},
			{
				name: 'Parsing',
				description: 'further analysis of these tokens and their conversion into the output text',
				link: 'https://en.wikipedia.org/wiki/Parsing'
			}
		],
		links: {
			github: true,
			readTheDocs: true
		},
		markdowned: { description: true }
	},
	{
		name: 'python-template',
		description:
			"Cookiecutter template for my every Python project. The collection of fundamental things for all of them. Check it to see most of my coding habits!\nI spend little time creating a new project. It's all thanks to this project - it's my personal template. It contains a set of the best tools I've found in all my experience.",
		technologies: [
			{
				name: 'cookiecutter',
				description: 'for easy template creation',
				link: 'https://github.com/cookiecutter/cookiecutter#readme'
			},
			{
				name: 'lice',
				description: 'for generating the project license',
				link: 'https://pypi.org/project/lice/'
			},
			{
				name: 'cruft',
				description: 'for auto-updating template',
				link: 'https://cruft.github.io/cruft/'
			},
			{
				name: 'OmegaConf',
				description: 'for configuration files with Yaml',
				link: 'https://omegaconf.readthedocs.io/'
			},
			{
				name: 'structlog',
				description: 'for beautiful and structed logging',
				link: 'https://structlog.org'
			},
			{
				name: 'mypy',
				description: 'linter for supporting statically typed Python',
				link: 'https://www.mypy-lang.org/'
			},
			{
				name: 'poetry',
				description: 'advanced package manager, my favorite tool',
				link: 'https://python-poetry.org/'
			},
			{
				name: 'Github Actions',
				description: 'for running automatic testing on every commit',
				link: 'https://github.com/features/actions'
			},
			{
				name: 'pytest',
				description: 'for testing with easy-to-write unit-tests',
				link: 'https://pytest.org/'
			},
			{
				name: 'QA with **[flake8](https://flake8.pycqa.org/)** and about five addons to it',
				markdowned: { name: true }
			},
			{
				name: 'Sphinx',
				description:
					'for generating documentation from [.RST](https://en.wikipedia.org/wiki/ReStructuredText) files',
				link: 'https://python-poetry.org/',
				markdowned: { description: true }
			},
			{
				name: 'documentation with **[Sphinx](https://pypi.org/project/Sphinx/)**, **[Furo](https://pypi.org/project/furo/)** theme and **[ReadTheDocs.org](https://readthedocs.org)** for hosting',
				markdowned: { name: true }
			}
		],
		links: {
			github: true
		}
	},
	{
		name: 'This site!',
		description:
			"My first Frontend project. It was firstly written in [Next.js 13](https://nextjs.org), but then after some experience with frontend development, it is now in [Svelte](https://svelte.dev/). It uses [daisyUI](https://daisyui.com/) library for nice cute look of the site, which itself is built using [Tailwind CSS](https://tailwindcss.com/). The site also has [Markdown](https://en.wikipedia.org/wiki/Markdown) support. In fact, this paragraph is written in Markdown.\nI believe that every programmer should have their own domain, and maybe a website on it. It's incredibly convenient to keep some of your personal things there (for example, running projects or your portfolio/resume). So I bought such a year ago, [perchun.it](https://perchun.it), and to fill my homepage with something, I wrote my portfolio site. This is how my journey to frontend beginned. And as you may see, I mentioned that I am only backend developer, don't like at all the whole frontend state and technologies used to build software here.",
		technologies: [
			{
				name: 'Svelte',
				description:
					'a fast and light frontend framework, which is just better and easier than React, which I used before',
				link: 'https://svelte.dev'
			},
			{
				name: 'daisyUI',
				description:
					"super cute and cool UI library, which is framework independent and is built using only Tailwind CSS. This site wouldn't be so nice at all without it. At the end of the day, I am not a designer",
				link: 'https://daisyui.com'
			},
			{
				name: 'Tailwind CSS',
				description: 'the new awesome approach to CSS',
				link: 'https://tailwindcss.com'
			},
			{
				name: 'TypeScript',
				description: 'JavaScript with types',
				link: 'https://www.typescriptlang.org'
			}
		],
		links: {
			github: true
		},
		markdowned: { description: true }
	},
	{
		name: 'the-war-tracker-bot',
		description:
			"The Telegram bot that doom-scrolls through the war news for you!\nI'm a person who often finds myself doomscrolling, and I'm not a big fan of it. But I really want to follow the latest news in Ukraine (more specifically, about the war). Instead of following hundreds of telegram channels - I can finally use this bot! This bot follows a bunch of telegram channels and sends you the news you need!\nExample: When I saw the news that a missile had landed in Poland, I wanted to follow the news, but I didn't want to scroll through the night.\nI'm sure this happens with a lot of news. At the time, I wanted a channel that reported only the most important news - but this has its drawbacks. The line of the \"importance\" is subjective for everyone, and such a channel would require the authors to reveal a lot of their thoughts, which I didn't want, so I didn't create something like that.",
		technologies: [
			{
				name: 'Telethon',
				description:
					'library for connecting to Telegram with MTProto protocol, which is what use mobile apps',
				link: 'https://pypi.org/project/Telethon/'
			},
			{
				name: 'Redis',
				description: 'key-value database, mostly used for caching',
				link: 'https://redis.io'
			}
		],
		links: {
			github: true,
			readTheDocs: true
		}
	}
];
export default projectsInfo;
