angular.module('minoptimera', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/welcome', {templateUrl: 'partials/welcome.html',   controller: 'WelcomeCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/welcome'});
    }]);