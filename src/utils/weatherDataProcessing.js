export const weatherDataProcessing = weather => {
  let city = weather.name, 
      main = weather.weather[0].main, 
      temp = (weather.main.temp - 273.15).toFixed(0), 
      wind = weather.wind.speed, 
      humidity = weather.main.humidity, 
      pressure = weather.main.pressure, 
      timezone = weather.timezone / 3600,
      icon = weather.weather[0].icon.substr(0, 2),
      time = new Date(weather.dt * 1000),
      coord = weather.coord
  const getDate = d => 
    `${d.getUTCHours() + timezone >= 24 ? d.getUTCHours() + timezone - 24 : d.getUTCHours() + timezone}` +
    `:${d.getUTCMinutes() + timezone}`
  
  return {
    city: city,
    temp: temp,
    time: getDate(time),
    icon: icon,
    day: time.getUTCDay() + timezone,
    main: main,
    pressure: pressure,
    humidity: humidity,
    wind: wind,
    coord: coord
  }
}