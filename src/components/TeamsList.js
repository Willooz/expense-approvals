import React, { useEffect, useState } from "react";

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

  return <List listItems={teamsList} />;
};

export default TeamsList;
