# perchun.it

[![Support Ukraine](https://badgen.net/badge/support/UKRAINE/?color=0057B8&labelColor=FFD700)](https://war.ukraine.ua/support-ukraine/)

My personal portfolio!

## Deployment

The flake provides a NixOS module. Add this repository as an input of your
NixOS flake, import `inputs.perchun-it.nixosModules.default` and enable the
service:

```nix
services.perchun-it = {
  enable = true;
  port = 3000;
};
```

To update, run `nix flake update perchun-it` and rebuild the system.

## Thanks

This project was generated with [svelte-template](https://github.com/PerchunPak/svelte-template).
