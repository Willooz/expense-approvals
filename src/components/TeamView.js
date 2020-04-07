import React from "react";

const TeamView = ({ team, close }) => (
  <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {team.name}
            </h3>
            <ul className="mt-2">
              {team.approvers.map((approver) => (
                <li key={approver} className="text-sm leading-5 text-gray-500">
                  <div className="flex items-center justify-between h-10">
                    {approver}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            onClick={() => close()}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Close
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default TeamView;
