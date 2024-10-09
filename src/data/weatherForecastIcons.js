import cloud from '../assets/img/icons-svg/Cloud.svg'
import cloud0 from '../assets/img/icons-svg/Cloud0.svg'
import foggy from '../assets/img/icons-svg/foggy0.svg'
import Foggy from '../assets/img/icons-svg/foggy.svg'
import group from '../assets/img/icons-svg/Group5.svg'
import hail from '../assets/img/icons-svg/hail.svg'
import hail0 from '../assets/img/icons-svg/hail0.svg'
import rain from '../assets/img/icons-svg/rain.svg'
import rain0 from '../assets/img/icons-svg/rain0.svg'
import rain2 from '../assets/img/icons-svg/Lrain0.svg'
import rain3 from '../assets/img/icons-svg/Lrain.svg'
import snow from '../assets/img/icons-svg/Lsnow.svg'
import snow0 from '../assets/img/icons-svg/Lsnow1.svg'
import snow1 from '../assets/img/icons-svg/Lsnow2.svg'
import mcloudy from '../assets/img/icons-svg/mcloudy.svg'
import mcloudy0 from '../assets/img/icons-svg/mcloudy0.svg'
import moon from '../assets/img/icons-svg/moon.svg'
import pcloudy from '../assets/img/icons-svg/pcloudy.svg'
import pcloudy0 from '../assets/img/icons-svg/pcloudy0.svg'
import sleet1 from '../assets/img/icons-svg/sleet1.svg'
import sleet2 from '../assets/img/icons-svg/sleet2.svg'
import snow2 from '../assets/img/icons-svg/snow.svg'
import sunny from '../assets/img/icons-svg/sunny.svg'
import Tshower from '../assets/img/icons-svg/Tshower.svg'
import Tshower0 from '../assets/img/icons-svg/Tshower0.svg'
import TStorm from '../assets/img/icons-svg/TStorm.svg'
import Tstorm0 from '../assets/img/icons-svg/Tstorm0.svg'
import wind from '../assets/img/icons-svg/wind.svg'

export const weatherForecastIcons = {
  //sun
  "clear sky": { day: sunny, night: moon },
  //clouds
  "few clouds": { day: pcloudy, night: pcloudy0 },
  "scattered clouds": { day: mcloudy, night: mcloudy0 },
  "overcast clouds": { day: cloud0, night: cloud0 },
  "broken clouds": { day: cloud0, night: cloud0 },
  //haze
  drizzle: { day: Foggy, night: foggy }, //Group5
  mist: { day: Foggy, night: foggy },
  haze: { day: group, night: foggy },
  "light intensity drizzle": { day: group, night: foggy },
  //rain
  rain: { day: rain, night: rain0 },
  "light intensity shower rain": { day: rain3, night: rain2 },
  "heavy intensity rain": { day: hail, night: hail0 },
  "light rain": { day: rain3, night: rain2 },
  "moderate rain": { day: rain, night: rain0 },
  "ragged shower rain": { day: hail, night: hail0 },
  Thunderstorm: { day: TStorm, night: Tstorm0 },
  //	 snow
  snow: { day: snow, night: snow0 },
  "light snow": { day: snow1, night: snow1 },
  "light snow": { day: snow1, night: snow1 },
  "light shower sleet": { day: snow2, night: sleet1 },
  "light shower snow": { day: snow2, night: snow0 },
  "heavy snow": { day: snow2, night: snow0 },
  "heavy shower snow": { day: sleet2, night: sleet2 },
};