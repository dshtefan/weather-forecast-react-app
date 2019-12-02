import React from 'react';
import icon01 from './icons/01.svg';
import icon02 from './icons/02.svg';
import icon03 from './icons/03.svg';
import icon04 from './icons/04.svg';
import icon09 from './icons/09.svg';
import icon10 from './icons/10.svg';
import icon11 from './icons/11.svg';
import icon13 from './icons/13.svg';
import icon50 from './icons/50.svg';

const WeatherIcon = ({iconNumber}) => {
  const createImg = (icon) => (
    <img src={icon} alt=""/>
  );
  switch (iconNumber) {
    case '01':
      return createImg(icon01);
    case '02':
      return createImg(icon02);
    case '03':
      return createImg(icon03);
    case '04':
      return createImg(icon04);
    case '09':
      return createImg(icon09);
    case '10':
      return createImg(icon10);
    case '11':
      return createImg(icon11);
    case '13':
      return createImg(icon13);
    case '50':
      return createImg(icon50);
    default :
      return null;
  }
};

export default WeatherIcon;