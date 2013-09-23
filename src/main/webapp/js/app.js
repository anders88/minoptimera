angular.module('minoptimera', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/salgskalkyle', {templateUrl: 'partials/kalkylemeny.html',   controller: 'KalkyleMenyCtrl'}).
            when('/salgskalkyle/dokumenter', {templateUrl: 'partials/dokumenter.html',   controller: 'DokumentCtrl'}).
            when('/salgskalkyle/kledning-og-bjelke', {templateUrl: 'partials/kledning-og-bjelke.html', controller: 'KledningOgBjelkeCtrl'}).
            when('/salgskalkyle/tak', {templateUrl: 'partials/tak.html', controller: 'TakCtrl'}).
            when('/salgskalkyle/yttervegg-og-listverk', {templateUrl: 'partials/yttervegg-og-listverk.html', controller: 'YtterveggOgListverkCtrl'}).
            when('/salgskalkyle/type-bygg', {templateUrl: 'partials/type-bygg.html', controller: 'TypeByggCtrl'}).
            when('/salgskalkyle/annen-info', {templateUrl: 'partials/annen-info.html', controller: 'AnnenInfoCtrl'}).
            otherwise({redirectTo: '/salgskalkyle'});
    }]);