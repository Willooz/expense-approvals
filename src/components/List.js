import React from "react";

const List = ({ listItems }) => (
  <ul>
    {listItems.map(({ id, name }) => (
      <li key={id} data-testid="list-item">
        <span>{name}</span>
      </li>
    ))}
  </ul>
);

export default List;
