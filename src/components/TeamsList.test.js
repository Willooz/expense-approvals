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
      approvals: [{ approver: "Approver 1" }, { approver: "Approver 2" }],
      users: ["User 4", "User 5"],
    },
  ];

  it("Should renders all teams", () => {
    const { queryAllByTestId } = render(<TeamsList listItems={listItems} />);
    expect(queryAllByTestId("list-item")).toHaveLength(3);
  });

  it("Should render the last team's name, approvals and users", () => {
    const { queryByText } = render(<TeamsList listItems={listItems} />);
    expect(queryByText("Team 3")).toBeTruthy();
    expect(queryByText("Approver 1, Approver 2")).toBeTruthy();
    expect(queryByText("User 4, User 5")).toBeTruthy();
  });

  it("Should render 3 approvals max", () => {
    const { queryByText } = render(
      <TeamsList
        listItems={[
          {
            id: "ID3",
            name: "Team 3",
            approvals: [
              { approver: "Approver 1" },
              { approver: "Approver 2" },
              { approver: "Approver 3" },
              { approver: "Approver 4" },
            ],
            users: ["User 4", "User 5"],
          },
        ]}
      />
    );
    expect(queryByText("Approver 1, Approver 2, Approver 3")).toBeTruthy();
    expect(queryByText("Approver 1, Approver 2, Approver 3, Approver 4")).toBe(
      null
    );
  });

  it("Should select the right team its button is clicked", () => {
    const select = jest.fn();
    const { queryAllByText } = render(
      <TeamsList listItems={listItems} select={select} />
    );
    const viewButtons = queryAllByText("View");
    expect(viewButtons).toHaveLength(1);

    fireEvent.click(viewButtons[0]);
    expect(select).toHaveBeenCalledWith(listItems[2]);
  });
});
