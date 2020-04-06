import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
  const listItems = [
    { id: "ID1", name: "Name 1", items: ["Item 1", "Item 2"] },
    { id: "ID2", name: "Name 2", items: ["Item 3"] },
    { id: "ID3", name: "Name 3", items: ["Item 4", "Item 5"] },
  ];

  it("Should renders all list items", () => {
    const { queryAllByTestId } = render(<List listItems={listItems} />);
    expect(queryAllByTestId("list-item")).toHaveLength(3);
  });

  it("Should render the last list item's name and items", () => {
    const { queryByText } = render(<List listItems={listItems} />);
    expect(queryByText("Name 3")).toBeTruthy();
    expect(queryByText("Item 4, Item 5")).toBeTruthy();
  });
});
