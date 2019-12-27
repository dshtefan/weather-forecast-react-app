import React from 'react';
import Input from "./Input";


describe('Input', () => {
  const props = {
    handleChange: () => {},
    inputValue: undefined,
    clickButton: () => {}
  };

  describe('пустая строка', () => {
    const input = shallow(<Input {...props} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(input)).toMatchSnapshot();
    });
  });

  describe('строка с названием города', () => {
    const nextProps = {
      ...props,
      inputValue: 'Moscow'
    };
    const input = shallow(<Input {...nextProps} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(input)).toMatchSnapshot();
    });
  });
});