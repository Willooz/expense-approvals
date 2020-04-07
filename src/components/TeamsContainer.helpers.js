const TEAM_APPROVERS = {
  TEAM1: ["Sophie", "Lucy", "Sarah", "Thomas"],
};

export const addApproversAndUsersToTeams = (teamsList, usersList) =>
  teamsList.map(({ id, name, users }) => ({
    id,
    name,
    approvers: (TEAM_APPROVERS[id] || []).slice(0, 3),
    users: users.reduce((teamUsers, userId) => {
      const teamUser = usersList.find((user) => user.id === userId);
      if (teamUsers.length < 3 && teamUser && teamUser.first_name) {
        teamUsers = [...teamUsers, teamUser.first_name];
      }
      return teamUsers;
    }, []),
  }));
