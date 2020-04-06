import React, { Fragment, useEffect, useState } from "react";

import List from "./List";

const TeamsList = () => {
  const [teamsList, setTeamsList] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/teams`
      );
      const teams = await response.json();
      setTeamsList(teams);
    };
    fetchTeams();
  }, []);

  return (
    <Fragment>
      <h2 className="text-2xl mb-4 font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
        Teams
      </h2>
      <List listItems={teamsList} />
    </Fragment>
  );
};

export default TeamsList;
