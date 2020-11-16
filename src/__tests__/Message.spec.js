import React from "react";
import { shallow } from "enzyme";

import Message from "../components/Messages";

describe("Message component", () => {
  const wrapper = shallow(<Message bmiMessage="Cats are the best" bmiValue="23.59" />);

  it("renders with message prop", () => {
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "Cats are the best 23.59"
    );
  });
});