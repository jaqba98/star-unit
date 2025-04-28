# @star-unit/js

> A lightweight tool for instant JavaScript unit testing.

## 📦 Installation

```bash
npm install @star-unit/js
```

## 🚀 Quick Start

Initialize configuration:

```bash
npx suj init
```

Run tests:

```bash
npx suj test
```

> **Note:** After installation, the CLI is available via the `suj` command.

## ✨ Features

- Easy-to-use unit testing syntax (`describe`, `test`, `expect`).
- Rich set of matchers.
- Lightweight and fast.
- Supports both frontend and backend JavaScript projects.

## 🔥 CLI Commands

### `init`

**Initialize the configuration required by this tool.**

**Options:**

- `-r, --root <root>` — Path to the root directory (default: `"./"`).

### `test`

**Run unit tests.**

**Options:**

- _None._

## 🛠️ API Reference

### `describe(description, fn)`

Groups related tests together.

```javascript
describe("Math operations", () => {
  // tests here
});
```

### `test(description, fn)`

Defines a single unit test.

```javascript
test("adds numbers correctly", () => {
  const result = 1 + 2;
  expect(result).toBe(3);
});
```

### `expect(actual)`

Starts an assertion chain for a test result.

```javascript
expect(4).toBe(4);
```

## 🎯 Matchers

Matchers are used to assert specific conditions:

| Matcher                      | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `.toBe(expected)`            | Asserts that value is exactly equal (`===`) |
| `.toEqual(expected)`         | Asserts deep equality                       |
| `.toThrow(expected?)`        | Asserts that a function throws an error     |
| `.toBeGreaterThan(expected)` | Asserts greater-than comparison             |
| `.toBeLessThan(expected)`    | Asserts less-than comparison                |
| `.toBeNull()`                | Asserts that value is null                  |
| `.toBeTruthy()`              | Asserts that value is truthy                |

## 🧪 Example

```javascript
const { describe, test, expect } = require("@star-unit/js");

describe("Array methods", () => {
  test("push adds an item", () => {
    const arr = [];
    arr.push(1);
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe(1);
  });

  test("pop removes the last item", () => {
    const arr = [1, 2, 3];
    const last = arr.pop();
    expect(last).toBe(3);
    expect(arr.length).toBe(2);
  });
});
```

## 📜 License

ISC License.
