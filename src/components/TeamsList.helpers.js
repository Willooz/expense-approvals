export const addUsernamesToTeams = (teamsList, usersList) =>
  teamsList.map(({ id, name, users }) => ({
    id,
    name,
    items: users.reduce((teamUsers, userId) => {
      const teamUser = usersList.find((user) => user.id === userId);
      if (teamUsers.length < 3 && teamUser && teamUser.first_name) {
        teamUsers = [...teamUsers, teamUser.first_name];
      }
      return teamUsers;
    }, []),
  }));
