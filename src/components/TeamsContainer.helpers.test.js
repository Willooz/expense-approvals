import { addApprovalsAndUsersToTeams } from "./TeamsContainer.helpers";

describe("TeamsContainer helpers", () => {
  describe("addApprovalsAndUsersToTeams", () => {
    let teamsList = [
      { id: "TEAM1", name: "Marketing", users: ["USR1", "USR3"] },
      { id: "TEAM2", name: "Product", users: ["USR2", "USR3", "USR5"] },
    ];
    let usersList = [
      { id: "USR1", first_name: "Eugene", last_name: "Tran" },
      { id: "USR2", first_name: "Ralph", last_name: "Romero" },
      { id: "USR3", first_name: "Tiffany", last_name: "Frazier" },
      { id: "USR4", first_name: "Sandra", last_name: "Reed" },
      { id: "USR5", first_name: "Jason", last_name: "Casey" },
    ];
    const approvals = {
      TEAM1: [
        { level: 500, approver: "Sophie" },
        { level: -1, approver: "Thomas" },
      ],
    };

    it("Should return an array of teams with approvals and users", () => {
      expect(
        addApprovalsAndUsersToTeams(teamsList, usersList, approvals)
      ).toEqual([
        {
          id: "TEAM1",
          approvals: [
            { level: 500, approver: "Sophie" },
            { level: -1, approver: "Thomas" },
          ],
          users: ["Eugene", "Tiffany"],
          name: "Marketing",
        },
        {
          id: "TEAM2",
          approvals: [],
          users: ["Ralph", "Tiffany", "Jason"],
          name: "Product",
        },
      ]);
    });

    it("Should return teams when users or firstnames are missing", () => {
      teamsList = [
        { id: "TEAM1", name: "Marketing", users: ["USR1", "USR2", "USR3"] },
      ];
      usersList = [
        { id: "USR1", first_name: "Eugene", last_name: "Tran" },
        { id: "USR2" },
      ];
      expect(
        addApprovalsAndUsersToTeams(teamsList, usersList, approvals)
      ).toEqual([
        {
          id: "TEAM1",
          approvals: [
            { level: 500, approver: "Sophie" },
            { level: -1, approver: "Thomas" },
          ],
          users: ["Eugene"],
          name: "Marketing",
        },
      ]);
    });

    it("Should return teams with 3 users max", () => {
      teamsList = [
        {
          id: "TEAM1",
          name: "Marketing",
          users: ["USR1", "USR2", "USR3", "USR4"],
        },
      ];
      usersList = [
        { id: "USR1", first_name: "Eugene", last_name: "Tran" },
        { id: "USR2", first_name: "Ralph", last_name: "Romero" },
        { id: "USR3", first_name: "Tiffany", last_name: "Frazier" },
        { id: "USR4", first_name: "Sandra", last_name: "Reed" },
      ];
      expect(
        addApprovalsAndUsersToTeams(teamsList, usersList, approvals)
      ).toEqual([
        {
          id: "TEAM1",
          approvals: [
            { level: 500, approver: "Sophie" },
            { level: -1, approver: "Thomas" },
          ],
          users: ["Eugene", "Ralph", "Tiffany"],
          name: "Marketing",
        },
      ]);
    });
  });
});
