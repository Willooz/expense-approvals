import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TeamsList from "./TeamsList";

describe("TeamsList component", () => {
  const listItems = [
    {
      id: "ID1",
      name: "Team 1",
      users: ["User 1", "User 2"],
    },
    {
      id: "ID2",
      name: "Team 2",
      users: ["User 3"],
    },
    {
      id: "ID3",
      name: "Team 3",
      approvers: ["Approver 1", "Approver 2"],
      users: ["User 4", "User 5"],
    },
  ];

  it("Should renders all teams", () => {
    const { queryAllByTestId } = render(<TeamsList listItems={listItems} />);
    expect(queryAllByTestId("list-item")).toHaveLength(3);
  });

  it("Should render the last team's name, approvers and users", () => {
    const { queryByText } = render(<TeamsList listItems={listItems} />);
    expect(queryByText("Team 3")).toBeTruthy();
    expect(queryByText("Approver 1, Approver 2")).toBeTruthy();
    expect(queryByText("User 4, User 5")).toBeTruthy();
  });

  it("Should select the right team its button is clicked", () => {
    const select = jest.fn();
    const { queryAllByText } = render(
      <TeamsList listItems={listItems} select={select} />
    );
    const viewButtons = queryAllByText("View");
    expect(viewButtons).toHaveLength(3);

    fireEvent.click(viewButtons[2]);
    expect(select).toHaveBeenCalledWith(listItems[2]);
  });
});
