import Player from "./Player";
import React from "react";
import { shallow } from "enzyme";

it("renders correct name", () => {
  const playerNamePassed = "Ania";
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find(".Player__name").text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it("renders the score number", () => {
  const playerScorePassed = 10;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(
    playerComponent.find(".Player__score").text()
  );

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it("should call onPlayerScoreChange with 1 when plus button is clicked", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const plusButton = playerComponent.find(".Player__button__plus");

  plusButton.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it("should call onPlayerScoreChange with -1 when minus button is clicked", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const minusButton = playerComponent.find(".Player__button__minus");

  minusButton.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it("should remove the player", () => {
  const mockedOnRemovePlayer = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerRemove={mockedOnRemovePlayer} />
  );

  const removeButton = playerComponent.find(".Player__button__remove");
  removeButton.simulate("click");

  expect(mockedOnRemovePlayer).toBeCalledWith();
});
