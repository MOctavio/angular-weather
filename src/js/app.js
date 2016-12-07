angular.module('weatherApp', ['ui.router', 'ngResource', 'ngTouch', 'weatherApp.services', 'weatherApp.controllers', 'weatherApp.directives', 'weatherApp.decorators'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home/home.html'
            });
    }]);

angular.module('weatherApp.services', []);
angular.module('weatherApp.controllers', []);
angular.module('weatherApp.directives', []);
angular.module('weatherApp.decorators', []);
