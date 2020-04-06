import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
  const listItems = [
    {
      id: "ID1",
      name: "Name 1",
      elements: [{ name: "Users", subElements: ["User 1", "User 2"] }],
    },
    {
      id: "ID2",
      name: "Name 2",
      elements: [{ name: "Users", subElements: ["User 3"] }],
    },
    {
      id: "ID3",
      name: "Name 3",
      elements: [
        { name: "Approvers", subElements: ["Approver 1", "Approver 2"] },
        { name: "Users", subElements: ["User 4", "User 5"] },
      ],
    },
  ];

  it("Should renders all list elements", () => {
    const { queryAllByTestId } = render(<List listItems={listItems} />);
    expect(queryAllByTestId("list-item")).toHaveLength(3);
  });

  it("Should render the last list item's name and elements", () => {
    const { queryByText } = render(<List listItems={listItems} />);
    expect(queryByText("Name 3")).toBeTruthy();
    expect(queryByText("Approver 1, Approver 2")).toBeTruthy();
    expect(queryByText("User 4, User 5")).toBeTruthy();
  });
});
