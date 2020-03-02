import App from "../src/components/App";
import React from "react";
import { shallow } from "enzyme";

describe("App", () => {
  test("should map snapshot", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("h2").text()).toBe("This is my starter app");
    expect(wrapper).toMatchSnapshot;
  });
});
