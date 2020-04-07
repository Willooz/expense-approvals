import React, { Fragment, useEffect, useState } from "react";

import TeamsList from "./TeamsList";
import TeamView from "./TeamView";
import { addApprovalsAndUsersToTeams } from "./TeamsContainer.helpers";

const TeamsContainer = () => {
  const [teamsList, setTeamsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [approvals] = useState({
    TEAM1: [
      { level: 500, approver: "Sophie" },
      { level: 1000, approver: "Lucy" },
      { level: 5000, approver: "Sarah" },
      { level: -1, approver: "Thomas" },
    ],
  });
  const [currentTeam, setCurrentTeam] = useState(null);

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

  const listItems = addApprovalsAndUsersToTeams(
    teamsList,
    usersList,
    approvals
  );

  return (
    <Fragment>
      <h2 className="text-2xl mb-4 font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
        Teams
      </h2>
      <TeamsList listItems={listItems} select={setCurrentTeam} />
      {currentTeam && (
        <TeamView team={currentTeam} close={() => setCurrentTeam(null)} />
      )}
    </Fragment>
  );
};

export default TeamsContainer;
