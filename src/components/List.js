import React from "react";

const List = ({ listItems }) => (
  <ul
    data-testid="list"
    className="px-4 py-2 bg-white shadow overflow-hidden rounded-lg"
  >
    {listItems.map(({ id, name, items }) => (
      <li
        key={`${id}-${name}`}
        data-testid="list-item"
        className="py-3 border-solid border-b last:border-b-0 border-b-gray-400"
      >
        <div>{name}</div>
        <span className="text-gray-500">{items.join(", ")}</span>
      </li>
    ))}
  </ul>
);

export default List;
