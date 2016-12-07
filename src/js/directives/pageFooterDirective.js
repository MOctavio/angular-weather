angular.module('weatherApp.directives')
    .directive('pageFooter', [function() {
        return {
            restrict: 'E',
            templateUrl: '/views/partials/_pageFooter.html'
        };
    }]);
