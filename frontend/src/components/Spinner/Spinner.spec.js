import React from 'react';
import Spinner from './Spinner';

describe('Spinner', () => {
  describe('Компонент содержит необходимые классы', () => {
    const spinner = shallow(<Spinner />);

    it ('Содержит класс: "lds-css"', () => {
      expect(spinner.hasClass('lds-css')).toBeTruthy();
    });

    it ('Содержит класс: "ng-scope"', () => {
      expect(spinner.hasClass('ng-scope')).toBeTruthy();
    });

    it ('Содержит класс: "lds-eclipse"', () => {
      expect(spinner.find('.lds-css').children().hasClass('lds-eclipse')).toBeTruthy();
    });

    it('отображается корректно', () => {
      expect(shallowToJson(spinner)).toMatchSnapshot();
    });
  });

});