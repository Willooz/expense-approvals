import React from "react";

const List = ({ listItems }) => (
  <ul
    data-testid="list"
    className="px-4 py-2 bg-white shadow overflow-hidden rounded-lg"
  >
    {listItems.map(({ id, name, elements = [] }) => (
      <li
        key={`${id}-${name}`}
        data-testid="list-item"
        className="py-3 border-solid border-b last:border-b-0 border-b-gray-400"
      >
        <div>{name}</div>
        {elements.map(
          (element) =>
            element.subElements.length > 0 && (
              <div
                key={element.name}
                className="inline-block mr-4 text-gray-500"
              >
                <span className="font-semibold">{element.name}:</span>{" "}
                {element.subElements.join(", ")}
              </div>
            )
        )}
      </li>
    ))}
  </ul>
);

export default List;
