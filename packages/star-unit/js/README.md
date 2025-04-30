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
- Rich set of matchers, including `.not` negations.
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
expect(4).not.toBe(5);
```

You can chain `.not` to invert the matcher logic.

## 🎯 Matchers

Matchers are used to assert specific conditions. Each matcher has a `.not` version that inverts its logic.

| Matcher                      | Description                          | `.not` Version                  |
| ---------------------------- | ------------------------------------ | ------------------------------- |
| `.toBe(expected)`            | Value is exactly equal (`===`)       | Value is **not** exactly equal  |
| `.toEqual(expected)`         | Values are deeply equal              | Values are **not** deeply equal |
| `.toThrow(expected?)`        | Function throws error                | Function **does not** throw     |
| `.toBeGreaterThan(expected)` | Greater than comparison              | **Not** greater than            |
| `.toBeLessThan(expected)`    | Less than comparison                 | **Not** less than               |
| `.toBeNull()`                | Value is `null`                      | Value is **not** `null`         |
| `.toBeTruthy()`              | Value is truthy (`!!value === true`) | Value is **not** truthy         |

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

  test("pop should not add elements", () => {
    const arr = [1, 2, 3];
    arr.pop();
    expect(arr.length).not.toBe(3);
  });
});
```

## 📜 License

ISC License.
