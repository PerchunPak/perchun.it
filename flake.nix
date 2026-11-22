{
  description = "My personal portfolio!";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    let
      all = flake-utils.lib.eachDefaultSystem (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          perchun-it = pkgs.callPackage ./nix/package.nix {
            rev = self.rev or self.dirtyRev or null;
          };
        in
        {
          packages = {
            inherit perchun-it;
            default = perchun-it;
          };

          checks = {
            inherit perchun-it;
          };

          devShells.default = pkgs.mkShell {
            packages = [
              pkgs.bun
              pkgs.nodejs_26
            ];
          };
        }
      );
    in
    {
      nixosModules.perchun-it =
        { lib, pkgs, ... }:
        {
          imports = [ ./nix/module.nix ];
          services.perchun-it.package = lib.mkDefault all.packages.${pkgs.stdenv.hostPlatform.system}.default;
        };
      nixosModules.default = self.nixosModules.perchun-it;

      overlays.perchun-it = (
        final: prev: { perchun-it = all.packages.${prev.stdenv.hostPlatform.system}.default; }
      );
      overlays.default = self.overlays.perchun-it;
    }
    // all;
}
