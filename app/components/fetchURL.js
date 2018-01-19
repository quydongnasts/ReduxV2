const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&APPID=89512da8d10ec5a564405f1d9e1a0e5e&q=';

function fetchData(cityName) {
  return fetch(URL + cityName)
  .then((response) => response.json())
  .then((responseJson) => responseJson.list[0].main.temp);
}

// fetchData('Saigon')
// .then(a => console.log('nhiet do:', a))
// .catch(err => console.log(err));

export default fetchData;
