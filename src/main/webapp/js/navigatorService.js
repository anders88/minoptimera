angular.module('minoptimera')
    .factory('navigatorService', [function() {
        var pages={
            meny: {index: 0, page: "#/salgskalkyle"},
            dokumenter: {index: 1, page: "#/salgskalkyle/dokumenter"},
            kledning: {index: 2, page: "#/salgskalkyle/kledning-og-bjelke"},
            bjelke: {index: 3, page: "#/salgskalkyle/tak"},
            yttervegg: {index: 4, page: "#/salgskalkyle/yttervegg-og-listverk"}
        };

        var numPages=5;

        var currentPage=pages.meny;

        var toPage = function(pagenum) {
            currentPage = _.find(pages,function(page) {
                return page.index == pagenum;
            });
             window.location = currentPage.page;
        }

        var service = {
            pageLoad: function(pageid) {
                currentPage = pages[pageid];
            },
            next: function() {
                if (currentPage.index <numPages-1) {
                    toPage(currentPage.index+1);
                }
            },
            previous: function() {
                if (currentPage.index > 0) {
                    toPage(currentPage.index-1);
                }
            }
        };
        return service;
    }]);

