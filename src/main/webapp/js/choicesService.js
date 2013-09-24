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
            },
            enebolig: {
                checked: false,
                offval: "img/enebolig.png",
                onval: "img/enebolig-valgt.png"
            },
            rekkehus: {
                checked: false,
                offval: "img/rekkehus.png",
                onval: "img/rekkehus-valgt.png"
            },
            leilighetsbygg: {
                checked: false,
                offval: "img/leilighetsbygg.png",
                onval: "img/leilighetsbygg-valgt.png"
            },
            hytte: {
                checked: false,
                offval: "img/hytte.png",
                onval: "img/hytte-valgt.png"
            },
            naringsbygg: {
                checked: false,
                offval: "img/naeringsbygg.png",
                onval: "img/naeringsbygg-valgt.png"
            },
            fredetBygg: {
                checked: false,
                offval: "img/fredetbygg.png",
                onval: "img/fredetbygg-valgt.png"
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
                bredde : "148",
                bunnsviller: false,
                toppsviller: false
            },
            tak: {

            }
        }
        return service;
    }]);

