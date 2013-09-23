angular.module('minoptimera')
    .factory('navigatorService', [function() {
        var pages={
            meny: {index: 0, page: "#/salgskalkyle"},
            dokumenter: {index: 1, page: "#/salgskalkyle/dokumenter"},
            kledning: {index: 2, page: "#/salgskalkyle/kledning-og-bjelke"},
            tak: {index: 3, page: "#/salgskalkyle/tak"},
            yttervegg: {index: 4, page: "#/salgskalkyle/yttervegg-og-listverk"},
            typeBygg:  {index: 5, page: "#/salgskalkyle/type-bygg"}
        };

        var numPages=6;

        var currentPage = pages.meny;


        var service = {
            pageLoad: function(pageid) {
                pageChanged(pages[pageid]);
            },

            nextVisible: false,
            previousVisible: false,
            gotoNext: function() {
                pageChanged(pageWithIndex(currentPage.index+1));
                window.location = currentPage.page;
            },
            gotoPrevious: function() {
                pageChanged(pageWithIndex(currentPage.index-1));
                window.location = currentPage.page;
            }
        };

        var pageWithIndex=function(index) {
            return _.find(pages,function(page) {
                return page.index == index;
            });
        }
        var pageChanged=function(newpage) {
            currentPage = newpage;
            service.nextVisible = (currentPage.index <numPages-1);
            service.previousVisible = (currentPage.index > 0);
        };

        return service;
    }]);

