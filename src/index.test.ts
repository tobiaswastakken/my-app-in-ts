import HelloWorld from "./index";

test("HelloWorld deberia decir --Hello World", () => {
  expect(HelloWorld).toBe("Hello World");
});