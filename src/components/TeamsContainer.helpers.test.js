import { addApproversAndUsersToTeams } from "./TeamsContainer.helpers";

describe("TeamsContainer helpers", () => {
  describe("addApproversAndUsersToTeams", () => {
    it("Should return an array of teams with approvers and users", () => {
      const teamsList = [
        { id: "TEAM1", name: "Marketing", users: ["USR1", "USR3"] },
        { id: "TEAM2", name: "Product", users: ["USR2", "USR3", "USR5"] },
      ];
      const usersList = [
        { id: "USR1", first_name: "Eugene", last_name: "Tran" },
        { id: "USR2", first_name: "Ralph", last_name: "Romero" },
        { id: "USR3", first_name: "Tiffany", last_name: "Frazier" },
        { id: "USR4", first_name: "Sandra", last_name: "Reed" },
        { id: "USR5", first_name: "Jason", last_name: "Casey" },
      ];
      expect(addApproversAndUsersToTeams(teamsList, usersList)).toEqual([
        {
          id: "TEAM1",
          approvers: ["Sophie", "Lucy", "Sarah"],
          users: ["Eugene", "Tiffany"],
          name: "Marketing",
        },
        {
          id: "TEAM2",
          approvers: [],
          users: ["Ralph", "Tiffany", "Jason"],
          name: "Product",
        },
      ]);
    });

    it("Should return teams when users or firstnames are missing", () => {
      const teamsList = [
        { id: "TEAM1", name: "Marketing", users: ["USR1", "USR2", "USR3"] },
      ];
      const usersList = [
        { id: "USR1", first_name: "Eugene", last_name: "Tran" },
        { id: "USR2" },
      ];
      expect(addApproversAndUsersToTeams(teamsList, usersList)).toEqual([
        {
          id: "TEAM1",
          approvers: ["Sophie", "Lucy", "Sarah"],
          users: ["Eugene"],
          name: "Marketing",
        },
      ]);
    });

    it("Should return teams with 3 approvers and 3 users max", () => {
      const teamsList = [
        {
          id: "TEAM1",
          name: "Marketing",
          users: ["USR1", "USR2", "USR3", "USR4"],
        },
      ];
      const usersList = [
        { id: "USR1", first_name: "Eugene", last_name: "Tran" },
        { id: "USR2", first_name: "Ralph", last_name: "Romero" },
        { id: "USR3", first_name: "Tiffany", last_name: "Frazier" },
        { id: "USR4", first_name: "Sandra", last_name: "Reed" },
      ];
      expect(addApproversAndUsersToTeams(teamsList, usersList)).toEqual([
        {
          id: "TEAM1",
          approvers: ["Sophie", "Lucy", "Sarah"],
          users: ["Eugene", "Ralph", "Tiffany"],
          name: "Marketing",
        },
      ]);
    });
  });
});
