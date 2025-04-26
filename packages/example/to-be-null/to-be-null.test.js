// const { test, expect, describe } = require("@star-unit/js");
//
// describe("to-be-null", () => {
//   function findUserById(id) {
//     const users = [
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//     ];
//     return users.find((user) => user.id === id) || null;
//   }
//
//   test("should return null for non-existing user", () => {
//     const result = () => findUserById(99);
//     expect(result).toBeNull();
//   });
//
//   test("should not return null for existing user", () => {
//     const result = () => findUserById(1);
//     expect(result).toBeNull();
//   });
// });
