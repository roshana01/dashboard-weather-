// icons.js
import cloud0 from '../assets/img/icons-svg/Cloud0.svg';
import foggy from '../assets/img/icons-svg/foggy0.svg';
import hail from '../assets/img/icons-svg/hail.svg';
import rain from '../assets/img/icons-svg/rain.svg';
import rain2 from '../assets/img/icons-svg/Lrain0.svg';
import rain3 from '../assets/img/icons-svg/Lrain.svg';
import snow from '../assets/img/icons-svg/Lsnow.svg';
import moon from '../assets/img/icons-svg/moon.svg';
import pcloudy from '../assets/img/icons-svg/pcloudy.svg';
import sleet1 from '../assets/img/icons-svg/sleet1.svg';
import sunny from '../assets/img/icons-svg/sunny.svg';
import TStorm from '../assets/img/icons-svg/TStorm.svg';
import wind from '../assets/img/icons-svg/wind.svg';

// Object to organize icons by type
const multiWeatherIcons = {
  clear: sunny,
  cloudy: cloud0,
  partlyCloudy: pcloudy,
  rain: rain,
  heavyRain: rain3,
  lightRain: rain2,
  snow: snow,
  fog: foggy,
  hail: hail,
  windy: wind,
  thunderstorm: TStorm,
  sleet: sleet1,
  moon: moon,
};

export default multiWeatherIcons;


