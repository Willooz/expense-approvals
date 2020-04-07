import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TeamView from "./TeamView";

describe("TeamView component", () => {
  const team = {
    id: "ID3",
    name: "Team 3",
    approvals: [
      { level: 100, approver: "Approver 1" },
      { level: 1000, approver: "Approver 2" },
      { level: -1, approver: "Approver 3" },
    ],
    users: ["User 4", "User 5"],
  };

  it("Should render the team's name and approvals", () => {
    const { queryByText } = render(<TeamView team={team} />);
    expect(queryByText("Team 3")).toBeTruthy();
    expect(queryByText("Approver 2")).toBeTruthy();
    expect(queryByText("From 100 to")).toBeTruthy();
    expect(queryByText("Approver 3")).toBeTruthy();
    expect(queryByText("Above 1000")).toBeTruthy();
  });

  it("Should close when the Close button is clicked", () => {
    const close = jest.fn();
    const { getByText } = render(<TeamView team={team} close={close} />);
    const closeButton = getByText("Close");
    expect(closeButton).toBeTruthy();

    fireEvent.click(closeButton);
    expect(close).toHaveBeenCalled();
  });
});
