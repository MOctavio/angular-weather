angular.module('weatherApp.controllers')
    .controller('HomeController', ['weatherService', function(weatherService) {
        const vm = this;
        vm.forecast = [];
        vm.getWeatherForecast = function() {
            weatherService.getWeatherForecast(vm.city)
                .then(data => {
                    vm.forecast = data;
                    vm.city = `${data.city.name}, ${data.city.country}`;
                });
        };
    }]);
