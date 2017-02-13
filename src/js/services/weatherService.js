angular.module('weatherApp.services')
    .factory('weatherService', ['$resource', function($resource) {
        //Please use your API KEY http://openweathermap.org/appid
        const APIKEY = '46611953e2cbb32a28715f841b70d720';
        const weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${APIKEY}`, {
            jsonCallback: "JSON_API_CALLBACK" // https://docs.angularjs.org/api/ng/service/$http
        }, {
            get: {
                method: "JSONP"
            }
        });

        const get = ((city, days = 1) =>
            weatherAPI.get({
                q: city,
                cnt: days
            })
        );

        return {
            getWeatherForecast: get
        };
    }]);
