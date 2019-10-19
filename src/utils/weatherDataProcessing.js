export const weatherDataProcessing = weather => {
  let {
    name,
    dt,
    main: { temp, humidity, pressure },
    weather: { 0: { main, icon } },
    wind: { speed },
    timezone,
    coordinates
  } = weather;

  const getTime= d => 
    `${d.getUTCHours() + timezone >= 24 ? d.getUTCHours() + timezone - 24 : d.getUTCHours() + timezone}` +
    `:${d.getUTCMinutes() + timezone}`;

  temp = (temp - 273.15).toFixed(0);
  timezone = timezone / 3600;
  icon = icon.substr(0, 2);
  dt = new Date(dt * 1000);
  
  return {
    city: name,
    temp: temp,
    time: getTime(dt),
    icon: icon,
    day: dt.getUTCDay() + timezone,
    main: main,
    pressure: pressure,
    humidity: humidity,
    wind: speed,
    coordinates: coordinates
  }
};