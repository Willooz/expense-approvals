import React from "react";
import { render } from "@testing-library/react";
import TeamsContainer from "./TeamsContainer";

describe("TeamsContainer component", () => {
  let fetchTeams;

  beforeAll(() => {
    fetchTeams = jest.spyOn(window, "fetch");
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("Should display a title", () => {
    const { queryByText } = render(<TeamsContainer />);
    expect(queryByText("Teams")).toBeTruthy();
  });

  it("Should fetch teams on mount", () => {
    render(<TeamsContainer />);
    expect(fetchTeams).toHaveBeenCalledWith(expect.stringContaining("/teams"));
  });

  it("Should render a List", () => {
    const { queryByTestId } = render(<TeamsContainer />);
    expect(queryByTestId("list")).toBeTruthy();
  });
});
