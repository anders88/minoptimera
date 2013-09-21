angular.module('minoptimera', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/welcome', {templateUrl: 'partials/welcome.html',   controller: 'WelcomeCtrl'}).
            when('/salgskalkyle', {templateUrl: 'partials/kalkylemeny.html',   controller: 'KalkyleMenyCtrl'}).
            when('/salgskalkyle/dokumenter', {templateUrl: 'partials/dokumenter.html',   controller: 'DokumentCtrl'}).
            when('/salgkalkyle/kledning-og-bjelke', {templateUrl: 'partials/kledning-og-bjelke.html', controller: 'KledningOgBjelkeCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/welcome'});
    }]);