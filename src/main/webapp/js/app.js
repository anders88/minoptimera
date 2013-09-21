angular.module('minoptimera', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/salgskalkyle', {templateUrl: 'partials/kalkylemeny.html',   controller: 'KalkyleMenyCtrl'}).
            when('/salgskalkyle/dokumenter', {templateUrl: 'partials/dokumenter.html',   controller: 'DokumentCtrl'}).
            when('/salgskalkyle/kledning-og-bjelke', {templateUrl: 'partials/kledning-og-bjelke.html', controller: 'KledningOgBjelkeCtrl'}).
            when('/salgskalkyle/tak', {templateUrl: 'partials/tak.html', controller: 'TakCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/salgskalkyle'});
    }]);