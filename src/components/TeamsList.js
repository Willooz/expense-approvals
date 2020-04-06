import React, { Fragment, useEffect, useState } from "react";

import List from "./List";
import { addUsernamesToTeams } from "./TeamsList.helpers";

const TeamsList = () => {
  const [teamsList, setTeamsList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all([
        fetch(`${process.env.REACT_APP_API_BASE_URL}/teams`),
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users`),
      ]);
      const [teams, users] = await Promise.all(
        responses.map((response) => response.json())
      );
      setTeamsList(teams);
      setUsersList(users);
    };
    fetchData();
  }, []);

  const listItems = addUsernamesToTeams(teamsList, usersList);

  return (
    <Fragment>
      <h2 className="text-2xl mb-4 font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
        Teams
      </h2>
      <List listItems={listItems} />
    </Fragment>
  );
};

export default TeamsList;
