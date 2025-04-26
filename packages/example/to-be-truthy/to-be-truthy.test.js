// const { test, expect, describe } = require("@star-unit/js");
//
// describe("to-be-truthy", () => {
//   function isUserLoggedIn(session) {
//     return session && session.userId;
//   }
//
//   function isFormValid(form) {
//     return form.name && form.email;
//   }
//
//   test("should return truthy when user is logged in", () => {
//     const result = () => isUserLoggedIn({ userId: 123 });
//     expect(result).toBeTruthy();
//   });
//
//   test("should return falsy when user is not logged in", () => {
//     const result = () => isUserLoggedIn(null);
//     expect(result).toBeTruthy();
//   });
//
//   test("should return truthy when form is valid", () => {
//     const result = () => isFormValid({ name: "Anna", email: "anna@mail.com" });
//     expect(result).toBeTruthy();
//   });
//
//   test("should return falsy when form is missing fields", () => {
//     const result = () => isFormValid({ name: "", email: "" });
//     expect(result).toBeTruthy();
//   });
// });
