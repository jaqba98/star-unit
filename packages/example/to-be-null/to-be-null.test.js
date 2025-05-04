const { test, expect, describe } = require("@star-unit/js");

describe("to-be-null", () => {
  function findUserById(id) {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    return users.find((user) => user.id === id) || null;
  }

  test("should return null for non-existing user").create(() => {
    const result = () => findUserById(99);
    expect(result).toBeNull();
  });
});
