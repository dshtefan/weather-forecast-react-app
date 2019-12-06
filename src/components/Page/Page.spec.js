import React from 'react';
import Page from "./Page";

describe('Page', () => {
  const page = shallow(<Page/>);
  it ('отображается корректно', () => {
    expect(shallowToJson(page)).toMatchSnapshot();
  });
});