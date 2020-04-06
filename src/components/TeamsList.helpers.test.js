import { addUsernamesToTeams } from "./TeamsList.helpers";

describe("TeamsList helpers", () => {
  describe("addUsernamesToTeams", () => {
    it("Should return an array of teams with user firstnames as items", () => {
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
      expect(addUsernamesToTeams(teamsList, usersList)).toEqual([
        { id: "TEAM1", items: ["Eugene", "Tiffany"], name: "Marketing" },
        { id: "TEAM2", items: ["Ralph", "Tiffany", "Jason"], name: "Product" },
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
      expect(addUsernamesToTeams(teamsList, usersList)).toEqual([
        { id: "TEAM1", items: ["Eugene"], name: "Marketing" },
      ]);
    });

    it("Should return teams with 3 users max", () => {
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
      expect(addUsernamesToTeams(teamsList, usersList)).toEqual([
        {
          id: "TEAM1",
          items: ["Eugene", "Ralph", "Tiffany"],
          name: "Marketing",
        },
      ]);
    });
  });
});
