import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  describe("it renders the display and the controllers", () => {
    it("renders both components", async () => {
      const { getByTestId } = await render(<Dashboard />);
      const controllers = getByTestId("controllers");
      const display = getByTestId("display");
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");
      const locks = getByTestId("locks");
      const openSezMe = getByTestId("openSezMe");

      expect(controllers).toBeInTheDocument();
      expect(display).toBeInTheDocument();
      expect(lock).toBeInTheDocument();
      expect(gate).toBeInTheDocument();
      expect(locks).toBeInTheDocument();
      expect(openSezMe).toBeInTheDocument();
    });
  });
});
