export const addApprovalsAndUsersToTeams = (teamsList, usersList, approvals) =>
  teamsList.map(({ id, name, users }) => ({
    id,
    name,
    approvals: approvals[id] || [],
    users: users.reduce((teamUsers, userId) => {
      const teamUser = usersList.find((user) => user.id === userId);
      if (teamUsers.length < 3 && teamUser && teamUser.first_name) {
        teamUsers = [...teamUsers, teamUser.first_name];
      }
      return teamUsers;
    }, []),
  }));
