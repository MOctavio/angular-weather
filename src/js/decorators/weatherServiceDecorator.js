angular.module('weatherApp.decorators')
    .decorator('weatherService', ['$delegate', function($delegate) {
        const kelvinToCelsius = (kelvin => Math.round(kelvin - 273.15));
        const convertToDate = ((dt) => new Date(dt * 1000).toUTCString().substring(0, 15));
        const pascalCase = (s => s.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()));

        const getWeatherForecast = function(city, day) {
            return $delegate
                .getWeatherForecast(city, day).$promise
                .then(response => {
                    const {
                        list,
                        city,
                    } = response;
                    let data = {
                        city,
                        forecast: [],
                    };

                    for (const day of list) {
                        const {
                            weather,
                            temp,
                            humidity,
                            dt,
                        } = day;

                        Object.keys(temp).forEach(function(key) {
                            temp[key] = `${kelvinToCelsius(temp[key])}°C`;
                        });

                        let _forecast = {
                            temp,
                            date: convertToDate(dt),
                            humidity: `${humidity}%`,
                            weather: pascalCase(weather[0].description),
                            iconURL: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
                        };
                        data.forecast.push(_forecast);
                    }
                    return data;
                });
        };

        return {
            getWeatherForecast,
        };
    }]);
