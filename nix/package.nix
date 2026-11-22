{
  lib,
  stdenvNoCC,
  bun,
  nodejs_26,
  makeWrapper,
  writableTmpDirAsHomeHook,
  rev ? null,
}:
let
  pname = "perchun-it";
  version = "0.0.1";

  src = lib.fileset.toSource {
    root = ../.;
    fileset = lib.fileset.unions [
      ../package.json
      ../bun.lock
      ../vite.config.ts
      ../tsconfig.json
      ../static
      ../src
      ./prune-platforms.js
    ];
  };

  # Both dependency sets come from one fixed-output derivation, so there is
  # one hash to update when bun.lock changes. `all` is for the build,
  # `production` is what the server needs at runtime.
  node_modules = stdenvNoCC.mkDerivation {
    pname = "${pname}-node_modules";
    inherit version;

    src = lib.fileset.toSource {
      root = ../.;
      fileset = lib.fileset.unions [
        ../package.json
        ../bun.lock
      ];
    };

    impureEnvVars = lib.fetchers.proxyImpureEnvVars ++ [
      "GIT_PROXY_COMMAND"
      "SOCKS_SERVER"
    ];

    nativeBuildInputs = [
      bun
      writableTmpDirAsHomeHook
    ];

    dontConfigure = true;

    buildPhase = ''
      runHook preBuild

      install_deps() {
        mkdir $1
        cp package.json bun.lock $1
        (cd $1 && bun install \
          --cpu="*" \
          --os="*" \
          --frozen-lockfile \
          --ignore-scripts \
          --no-progress \
          ''${@:2})
      }
      install_deps all
      install_deps production --production

      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall

      mkdir -p $out/all $out/production
      cp -R all/node_modules $out/all
      cp -R production/node_modules $out/production

      runHook postInstall
    '';

    # Otherwise the fixed-output derivation references store paths
    dontFixup = true;

    outputHash = "sha256-uNyXpoL2nrozPh3OcmNXGcplK+VlPzjZgyOXkE4sbzk=";
    outputHashAlgo = "sha256";
    outputHashMode = "recursive";
  };
in
stdenvNoCC.mkDerivation {
  outputs = [
    "out"
    "sourcemaps"
  ];

  inherit
    pname
    version
    src
    node_modules
    ;

  nativeBuildInputs = [
    bun
    nodejs_26
    makeWrapper
  ];

  env = lib.optionalAttrs (rev != null) {
    SENTRY_RELEASE = rev;
  };

  configurePhase = ''
    runHook preConfigure

    cp -R ${node_modules}/all/node_modules .
    chmod -R u+w node_modules
    patchShebangs node_modules

    runHook postConfigure
  '';

  buildPhase = ''
    runHook preBuild

    bun run build

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $sourcemaps
    (cd build && find . -name '*.map' -exec cp --parents {} $sourcemaps \;)
    find build -name '*.map' -o -name '*.map.br' -o -name '*.map.gz' | xargs rm

    mkdir -p $out/lib/perchun-it
    cp -R build package.json $out/lib/perchun-it
    cp -R ${node_modules}/production/node_modules $out/lib/perchun-it
    chmod -R u+w $out/lib/perchun-it/node_modules
    node nix/prune-platforms.js $out/lib/perchun-it/node_modules

    makeWrapper ${lib.getExe nodejs_26} $out/bin/perchun-it \
      --add-flags $out/lib/perchun-it/build/index.js

    runHook postInstall
  '';

  passthru = { inherit node_modules; };

  meta = {
    description = "My personal portfolio!";
    homepage = "https://github.com/PerchunPak/perchun.it";
    license = lib.licenses.mit;
    mainProgram = "perchun-it";
  };
}
