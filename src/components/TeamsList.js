import React from "react";

const TeamsList = ({ listItems, select }) => (
  <ul
    data-testid="teams-list"
    className="px-4 py-2 bg-white shadow overflow-hidden rounded-lg"
  >
    {listItems.map((listItem) => {
      const { id, name, approvals = [], users = [] } = listItem;
      return (
        <li
          key={`${id}-${name}`}
          data-testid="list-item"
          className="py-3 border-solid border-b last:border-b-0 border-b-gray-400"
        >
          <div className="mb-4 flex items-center justify-between">
            {name}
            {approvals.length > 0 && (
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                onClick={() => select(listItem)}
              >
                View
              </button>
            )}
          </div>
          {approvals.length > 0 && (
            <div className="inline-block mr-4 text-gray-500">
              <span className="font-semibold">Approvers:</span>{" "}
              {approvals
                .map((approval) => approval.approver)
                .slice(0, 3)
                .join(", ")}
            </div>
          )}
          {users.length > 0 && (
            <div className="inline-block mr-4 text-gray-500">
              <span className="font-semibold">Users:</span> {users.join(", ")}
            </div>
          )}
        </li>
      );
    })}
  </ul>
);

export default TeamsList;
