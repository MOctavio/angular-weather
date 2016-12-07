angular.module('weatherApp.directives')
    .directive("weatherList", function() {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/weatherList/_weatherList.html',
            replace: true,
            scope: {
                forecast: "="
            }
        }
    });
