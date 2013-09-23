angular.module('minoptimera')
    .factory('choicesService', [function() {
        var choices = {
            takstoler: {
                checked: false,
                offval: "img/takstoler.png",
                onval: "img/takstoler-valgt.png"
            },
            vindu: {
                checked: false,
                offval: "img/vinduer.png",
                onval: "img/vinduer-valgt.png"
            },
            byggesett: {
                checked: false,
                offval: "img/byggesett.png",
                onval: "img/byggesett-valgt.png"
            },
            trelast: {
                checked: false,
                offval: "img/trelast.png",
                onval: "img/trelast-valgt.png"
            },
            dorUtvendig: {
                checked: false,
                offval: "img/dor-utvendig.png",
                onval: "img/dor-utvendig-valgt.png"
            },
            dorInnvendig: {
                checked: false,
                offval: "img/dor-innvendig.png",
                onval: "img/dor-innvending-valgt.png"
            },
            ventilasjonsanlegg: {
                checked: false,
                offval: "img/ventilasjonsanlegg.png",
                onval: "img/ventilasjonsanlegg-valgt.png"
            },
            pipe: {
                checked: false,
                offval: "img/pipe.png",
                onval: "img/pipe-valgt.png"
            },
            sentralstovsuger: {
                checked: false,
                offval: "img/sentralstovesuger.png",
                onval: "img/sentralstovesuger-valgt.png"
            }
        };
        var service = {
            readIcon: function(fieldname) {
                var field = choices[fieldname];
                return field.checked ? field.onval : field.offval;
            },
            toggle: function(fieldname) {
                var field = choices[fieldname];
                field.checked = !field.checked;
            },
            documents: {
                uploadedFiles : [],
                grunnlag: "standard"
            },
            kledningBjelke:  {
                kledning_profil : "",
                kledning_behandlet : "",
                dekke : ""
            },
            yttervegg: {
                list_profil : "",
                list_behandlet : "",
                hoyde : "48",
                bredde : "148"

            },
            tak: {

            }
        }
        return service;
    }]);

