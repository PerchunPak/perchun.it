{
  config,
  lib,
  ...
}:

let
  cfg = config.services.perchun-it;
in
{
  options.services.perchun-it = {
    enable = lib.mkEnableOption "Enable perchun.it";

    # The flake sets the default, because the bun in stable nixpkgs is too old
    # to read bun.lock
    package = lib.mkOption {
      type = lib.types.package;
    };

    host = lib.mkOption {
      type = lib.types.str;
      default = "127.0.0.1";
    };
    port = lib.mkOption {
      type = lib.types.port;
      default = 3000;
    };
  };

  config.systemd.services = lib.mkIf cfg.enable {
    perchun-it = {
      enable = true;
      description = "My personal portfolio!";
      unitConfig.Type = "simple";
      script = lib.getExe cfg.package;
      environment = {
        HOST = cfg.host;
        PORT = toString cfg.port;
      };
      serviceConfig = {
        DynamicUser = true;
        Restart = "on-failure";
        RestartSec = "1s";
      };
      wantedBy = [ "multi-user.target" ];
    };
  };
}
