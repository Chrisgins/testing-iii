import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

describe("<Display />", () => {
  describe("component should be in open and unlocked state", () => {
    it("renders the child element in unlocked and open state", async () => {
      const { getByTestId } = await render(<Display />);
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");

      expect(lock).toHaveTextContent(/unlocked/i);
      expect(gate).toHaveTextContent(/open/i);
    });
  });
  describe("the gate cant open or close when locked", () => {
    it("gate presents with green-led when locked", async () => {
      const { getByTestId } = await render(<Display locked="true" />);
      const gate = getByTestId("gate");

      expect(gate).toHaveClass("green-led");
    });
  });
  describe("an open gate cant be locked", () => {
    it("lock has green-led when the gate is open", async () => {
      const { getByTestId } = await render(<Display closed="false" />);
      const lock = getByTestId("lock");

      expect(lock).toHaveClass("green-led");
    });
  });
  describe("red-led is presented when locked", () => {
    it("is a red-led on the locked or closed gates", async () => {
      const { getByTestId } = await render(
        <Display closed={true} locked={true} />
      );
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");

      expect(lock).toHaveClass("red-led");
      expect(gate).toHaveClass("red-led");
    });
  });
});