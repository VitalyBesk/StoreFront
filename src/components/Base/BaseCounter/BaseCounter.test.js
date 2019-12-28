import React from "react";
import BaseCounter from "./BaseCounter";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<BaseCounter/>", () => {
  let count = 0;

  const increment = () => (count += 1);
  const decrement = () => (count -= 1);

  const wrapper = mount(
    <BaseCounter
      handleClickIncrement={increment}
      handleClickDecrement={decrement}
      value={count}
    />
  );

  it("Checking the type of props", () => {
    expect(typeof wrapper.props().value).toBe("number");
    expect(wrapper.props().handleClickIncrement).toBeInstanceOf(Function);
    expect(wrapper.props().handleClickIncrement).toBeInstanceOf(Function);
  });

  it("it should increment count when button +(plus) clicked", () => {
    expect(count).toBe(0);
    expect(wrapper.props().value).toBe(0);
    wrapper.props().handleClickIncrement();
    wrapper.setProps({ value: count });
    expect(count).toBe(1);
    expect(wrapper.props().value).toBe(1);
  });

  it("it should increment count when button -(minus) clicked", () => {
    count = 1;
    expect(count).toBe(1);
    expect(wrapper.props().value).toBe(1);
    wrapper.props().handleClickDecrement();
    wrapper.setProps({ value: count });
    expect(count).toBe(0);
    expect(wrapper.props().value).toBe(0);
  });

  it("it should set button -(minus) disabled when value is equal 0", () => {
    expect(count).toBe(0);
    expect(wrapper.props().value).toBe(0);
    expect(wrapper.find("button:last-child").prop("disabled")).toBeTruthy();
  });
});
