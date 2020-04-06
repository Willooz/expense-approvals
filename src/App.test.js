import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("Should render the app title", () => {
    const { getByText } = render(<App />);
    expect(getByText("Expense approvals")).toBeInTheDocument();
  });
});
