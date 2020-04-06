import React from "react";
import { render } from "@testing-library/react";
import TeamsList from "./TeamsList";

describe("TeamsList component", () => {
  let fetchTeams;

  beforeAll(() => {
    fetchTeams = jest.spyOn(window, "fetch");
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("Should fetch teams on mount", () => {
    render(<TeamsList />);
    expect(fetchTeams).toHaveBeenCalledWith(expect.stringContaining("/teams"));
  });

  it("Should render a List", () => {
    const { queryByTestId } = render(<TeamsList />);
    expect(queryByTestId("list")).toBeTruthy();
  });
});
