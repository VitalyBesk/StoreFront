import React from "react";
import BaseCounter from "./BaseCounter";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<BaseCounter/>", () => {
  let count = 0;

  const mockFnIncrement = jest.fn(() => (count += 1));
  const mockFnDecrement = jest.fn(() => (count -= 1));

  const wrapper = mount(
    <BaseCounter
      handleClickIncrement={mockFnIncrement}
      handleClickDecrement={mockFnDecrement}
      value={count}
    />
  );

  it("snapshot render", () => {
    const component = renderer.create(
      <BaseCounter
        handleClickIncrement={mockFnIncrement}
        handleClickDecrement={mockFnDecrement}
        value={count}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("checking the type of props", () => {
    expect(typeof wrapper.props().value).toBe("number");
    expect(typeof wrapper.props().handleClickIncrement).toBe("function");
    expect(typeof wrapper.props().handleClickDecrement).toBe("function");
  });

  it("it should increment count when button +(plus) clicked", () => {
    expect(wrapper.props().value).toBe(0);
    wrapper.props().handleClickIncrement();
    expect(mockFnIncrement).toHaveBeenCalled();
    wrapper.setProps({ value: count });
    expect(wrapper.props().value).toBe(1);
  });

  it("it should increment count when button -(minus) clicked", () => {
    count = 1;
    expect(wrapper.props().value).toBe(1);
    wrapper.props().handleClickDecrement();
    expect(mockFnDecrement).toHaveBeenCalled();
    wrapper.setProps({ value: count });
    expect(wrapper.props().value).toBe(0);
  });

  it("it should set button -(minus) disabled when value is equal 0", () => {
    expect(wrapper.props().value).toBe(0);
    expect(wrapper.find("button:last-child").prop("disabled")).toBeTruthy();
  });
});
