import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controllers from "./Controls";

describe("<Controllers />", () => {
  describe("it renders buttons text passed by props", () => {
    it("displays 'Close Gate' 'Lock Gate'", async () => {
      const { getByTestId } = await render(<Controllers />);
      const locks = getByTestId("locks");
      const openSezMe = getByTestId("openSezMe");

      expect(locks).toHaveTextContent("Lock Gate");
      expect(openSezMe).toHaveTextContent("Close Gate");
    });
    it("has text content of 'Open Gate' 'Unlock Gate' when passed attributes of locked and closed", async () => {
      const { getByTestId, debug } = await render(
        <Controllers locked={true} closed={true} />
      );

      const locks = getByTestId("locks");
      const openSezMe = getByTestId("openSezMe");
      debug();
      expect(locks).toHaveTextContent("Unlock Gate");
      expect(openSezMe).toHaveTextContent("Open Gate");
    });
  });
  describe("expect disabled buttons according to props passed", () => {
    it("will disable the locked button if the gate is open", async () => {
      const { getByTestId } = await render(<Controllers />);
      const locks = getByTestId("locks");
      expect(locks).toHaveAttribute("disabled");
    });
    it("should disable the closed toggle button if the gate is locked", async () => {
      const { getByTestId } = await render(<Controllers locked={true} />);
      const openSezMe = getByTestId("openSezMe");
      expect(openSezMe).toHaveAttribute("disabled");
    });
  });
});

