import React from "react";

const List = ({ listItems }) => (
  <ul data-testid="list">
    {listItems.map(({ id, name }) => (
      <li key={`${id}-${name}`} data-testid="list-item">
        <span>{name}</span>
      </li>
    ))}
  </ul>
);

export default List;
