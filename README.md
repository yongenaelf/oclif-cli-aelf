oclif-cli-aelf
=================

Command-line interface for the aelf blockchain.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-cli-aelf.svg)](https://npmjs.org/package/oclif-cli-aelf)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-cli-aelf.svg)](https://npmjs.org/package/oclif-cli-aelf)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-cli-aelf
$ aelf COMMAND
running command...
$ aelf (--version)
oclif-cli-aelf/0.1.0 linux-x64 node-v18.20.4
$ aelf --help [COMMAND]
USAGE
  $ aelf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aelf help [COMMAND]`](#aelf-help-command)
* [`aelf plugins`](#aelf-plugins)
* [`aelf plugins add PLUGIN`](#aelf-plugins-add-plugin)
* [`aelf plugins:inspect PLUGIN...`](#aelf-pluginsinspect-plugin)
* [`aelf plugins install PLUGIN`](#aelf-plugins-install-plugin)
* [`aelf plugins link PATH`](#aelf-plugins-link-path)
* [`aelf plugins remove [PLUGIN]`](#aelf-plugins-remove-plugin)
* [`aelf plugins reset`](#aelf-plugins-reset)
* [`aelf plugins uninstall [PLUGIN]`](#aelf-plugins-uninstall-plugin)
* [`aelf plugins unlink [PLUGIN]`](#aelf-plugins-unlink-plugin)
* [`aelf plugins update`](#aelf-plugins-update)

## `aelf help [COMMAND]`

Display help for aelf.

```
USAGE
  $ aelf help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aelf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.10/src/commands/help.ts)_

## `aelf plugins`

List installed plugins.

```
USAGE
  $ aelf plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aelf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/index.ts)_

## `aelf plugins add PLUGIN`

Installs a plugin into aelf.

```
USAGE
  $ aelf plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into aelf.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AELF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AELF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ aelf plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ aelf plugins add myplugin

  Install a plugin from a github url.

    $ aelf plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ aelf plugins add someuser/someplugin
```

## `aelf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aelf plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aelf plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/inspect.ts)_

## `aelf plugins install PLUGIN`

Installs a plugin into aelf.

```
USAGE
  $ aelf plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into aelf.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AELF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AELF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ aelf plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ aelf plugins install myplugin

  Install a plugin from a github url.

    $ aelf plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ aelf plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/install.ts)_

## `aelf plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ aelf plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aelf plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/link.ts)_

## `aelf plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aelf plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aelf plugins unlink
  $ aelf plugins remove

EXAMPLES
  $ aelf plugins remove myplugin
```

## `aelf plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ aelf plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/reset.ts)_

## `aelf plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aelf plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aelf plugins unlink
  $ aelf plugins remove

EXAMPLES
  $ aelf plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/uninstall.ts)_

## `aelf plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aelf plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aelf plugins unlink
  $ aelf plugins remove

EXAMPLES
  $ aelf plugins unlink myplugin
```

## `aelf plugins update`

Update installed plugins.

```
USAGE
  $ aelf plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
