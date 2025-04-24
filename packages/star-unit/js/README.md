# Star Unit (for JavaScript) - CLI Tool

**Version**: 1.0.26  
**Command shortcut**: `suj`

Star Unit is a lightweight command-line tool designed for instant JavaScript unit testing, particularly in monorepo-style projects. It helps you set up and run unit tests quickly with minimal configuration.

## Getting Started

Install Star Unit globally using npm:

```bash
npm install -g star-unit
```

Once installed, you can use the `suj` command in your terminal.

## CLI Commands

### `init`

Initializes the configuration required for Star Unit to run tests in your project.

```bash
suj init
```

#### Options

- `-r, --root <root>`  
  Path to the root directory of your codebase.  
  **Default**: `./`

#### Example Usage

```bash
suj init --root ./packages
```

This command prepares the necessary configuration files and sets the provided root directory for test discovery.

---

### `test`

Runs unit tests in your project. Make sure you have initialized the configuration first using `suj init`.

```bash
suj test
```

#### Example Usage

```bash
suj test
```

This will execute all unit tests based on your current Star Unit setup.

## License

MIT

**Made with 💛 to simplify JavaScript testing.**
