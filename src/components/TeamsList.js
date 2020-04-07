import React from "react";

const TeamsList = ({ listItems, select }) => (
  <ul
    data-testid="list"
    className="px-4 py-2 bg-white shadow overflow-hidden rounded-lg"
  >
    {listItems.map((listItem) => {
      const { id, name, approvers = [], users = [] } = listItem;
      return (
        <li
          key={`${id}-${name}`}
          data-testid="list-item"
          className="py-3 border-solid border-b last:border-b-0 border-b-gray-400"
        >
          <div>{name}</div>
          {approvers.length > 0 && (
            <div className="inline-block mr-4 text-gray-500">
              <span className="font-semibold">Approvers:</span>{" "}
              {approvers.join(", ")}
            </div>
          )}
          {users.length > 0 && (
            <div className="inline-block mr-4 text-gray-500">
              <span className="font-semibold">Users:</span> {users.join(", ")}
            </div>
          )}
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={() => select(listItem)}
          >
            View
          </button>
        </li>
      );
    })}
  </ul>
);

export default TeamsList;
