import { typeText } from "../subfolder/subfile";

test("subfile", () => {
  expect(typeText).toBe("TYPE EXPORTED");
});