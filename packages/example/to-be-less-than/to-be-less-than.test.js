const { test, expect, describe } = require("@star-unit/js");

describe("to-be-less-than", () => {
  function calculateDeliveryTimeInMinutes(distanceKm) {
    return distanceKm * 3;
  }

  function getCartTotal(cartItems) {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  test("delivery time should be less than 30 minutes for local delivery").create(() => {
    const deliveryTime = () => calculateDeliveryTimeInMinutes(8);
    expect(deliveryTime).toBeLessThan(30);
  });

  test("delivery time should exceed limit for distant delivery").create(() => {
    const deliveryTime = () => calculateDeliveryTimeInMinutes(15);
    expect(deliveryTime).toBeLessThan(30);
  });

  test("cart total should be under free shipping limit").create(() => {
    const cartItems = [
      { name: "Book", price: 20, quantity: 1 },
      { name: "Pen", price: 5, quantity: 2 },
    ];
    const total = () => getCartTotal(cartItems);
    expect(total).toBeLessThan(50);
  });

  test("cart total should exceed free shipping limit").create(() => {
    const cartItems = [
      { name: "Monitor", price: 300, quantity: 1 },
      { name: "Keyboard", price: 100, quantity: 1 },
    ];
    const total = () => getCartTotal(cartItems);
    expect(total).toBeLessThan(50);
  });
});
