import { store } from "../../index";

export function ChangeCity(cityName) {
  var currentCity = {
    type: "ChangeCity",
    payload: {
      currentCity: cityName,
    },
  };

  store.dispatch(currentCity);
}

export function GetCountryList(countries) {
  var cList = [];
  for (var i in countries) {
    cList.push(countries[i].name);
  }

  var aCountries = {
    type: "GetCountryList",
    payload: {
      countryList: cList,
    },
  };

  store.dispatch(aCountries);
}

export function GetCityList(cities) {
  var sendList = [];

  for (var i in cities[0].states) {
    let city = {
      id: cities[0].states[i].id,
      name: cities[0].states[i].name,
    };

    sendList.push(city);
  }

  console.log(sendList);

  var aCities = {
    type: "GetCityList",
    payload: {
      cityList: sendList,
    },
  };

  store.dispatch(aCities);
}

function returnDate() {
  return Math.floor(Math.random() * 100).toString();
}

export function SetForeCast(foreCastData) {
  console.log(foreCastData);
  var foreCastes = [];

  for (var i in foreCastData.forecast.forecastday) {
    let foreCast = {
      text: foreCastData.forecast.forecastday[i].day.condition.text,
      icon: foreCastData.forecast.forecastday[i].day.condition.icon,
      chanceofRain:
        foreCastData.forecast.forecastday[i].day.daily_chance_of_rain,
      chanceofSnow:
        foreCastData.forecast.forecastday[i].day.daily_chance_of_snow,
      date: foreCastData.forecast.forecastday[i].date,
      code:
        foreCastData.forecast.forecastday[i].day.condition.code + returnDate(),
      name: foreCastData.location.name,
      current_c: foreCastData.current.temp_c,
      maxtemp_c: foreCastData.forecast.forecastday[i].day.maxtemp_c,
      mintemp_c: foreCastData.forecast.forecastday[i].day.mintemp_c,
    };
    foreCastes.push(foreCast);
  }

  console.log(foreCastes);

  var actionForecastes = {
    type: "SetForecastes",
    payload: {
      foreCastes: foreCastes,
    },
  };

  store.dispatch(actionForecastes);
}

export function ChangeCountry(countryName) {
  var currentCountry = {
    type: "ChangeCountry",
    payload: {
      currentCountry: countryName,
    },
  };

  store.dispatch(currentCountry);
}
