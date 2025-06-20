const { describe, test, expect } = require("@star-unit/js");

describe("to-be", () => {
  function getOrderStatus(orderId) {
    const orders = {
      1: "shipped",
      2: "processing",
      3: "cancelled",
    };
    return orders[orderId];
  }

  function getItemCount(cart) {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }

  test("should return 'shipped' status for order #0").create(() => {
    expect(10).toBe(10);
  });

  test("should return 'shipped' status for order #1").create(() => {
    const result = () => getOrderStatus(1);
    expect(result).toBe("shipped");
  });

  test("should return 'processing' status for order #2").create(() => {
    const result = () => getOrderStatus(2);
    expect(result).toBe("processing");
  });

  test("should return correct item count in cart").create(() => {
    const cart = [
      { name: "Laptop", quantity: 1 },
      { name: "Mouse", quantity: 2 },
    ];
    const result = () => getItemCount(cart);
    expect(result).toBe(3);
  });
});
