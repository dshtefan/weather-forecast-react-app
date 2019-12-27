import React from 'react';
import IconBar from "./IconBar";

describe('IconBar', () => {
  const props = {
    locRequested: () => {},
    errorMessage: 'error'
  };

  describe('ошибка', () => {
    const iconBar = shallow(<IconBar {...props} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(iconBar)).toMatchSnapshot();
    });
  });

  describe('компонент без ошибки', () => {
    const nextProps = {
      ...props,
      errorMessage: null
    };
    const iconBar = shallow(<IconBar {...nextProps} />);
    it ('отображается корректно', () => {
      expect(shallowToJson(iconBar)).toMatchSnapshot();
    });
  });
});