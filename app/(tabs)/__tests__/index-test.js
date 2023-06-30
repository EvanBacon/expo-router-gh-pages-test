import TabOneScreen from "../index";
import * as React from "react";
import renderer from "react-test-renderer";

it(`should display the right client env var`, () => {
  const tree = renderer.create(<TabOneScreen />).toJSON();

  expect(tree.children[0].children).toStrictEqual(["Tab One ", "test2"]);
});
