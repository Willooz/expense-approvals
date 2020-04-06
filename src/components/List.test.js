import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
  const listItems = [
    { id: "ID1", name: "Item 1" },
    { id: "ID2", name: "Item 2" },
    { id: "ID3", name: "Item 3" },
  ];

  it("Should renders all list items", () => {
    const { queryAllByTestId } = render(<List listItems={listItems} />);
    expect(queryAllByTestId("list-item")).toHaveLength(3);
  });

  it("Should render the last list item's name", () => {
    const { queryByText } = render(<List listItems={listItems} />);
    expect(queryByText("Item 3")).toBeTruthy();
  });
});
