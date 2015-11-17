'use strict';

/**
 * @ngdoc service
 * @name comoVamosColombiaApp.api
 * @description
 * # api
 * Service in the comoVamosColombiaApp.
 */
angular.module('comoVamosColombiaApp')
  .service('Api', ['$http', function ($http) {
    function uriParam(param) {
      return '/' + param;
    }

    var baseUrl = 'http://104.154.49.35:5000/';
    var uri = {
      cities: baseUrl + 'cities',
      indicator: function(city, indicator) {
        return baseUrl + 'indicator' + uriParam(city) + uriParam(indicator);
      },
    };

    var _cities = function() {
      return $http.get(uri.cities);
    };

    var _indicator = function(city, indicator) {
      return $http.get(uri.indicator(city, indicator));
    };

    var _dummy_indicator_1 = function() {
      return {
          name: 'Tasa de Desempleo 1',
          city: 'Bogotá',
          type: 'objetivo',
          timeline: [{
            'year': 1989,
            'value': 0.137679449
          }, {
            'year': 1990,
            'value': 0.13449362
          }, {
            'year': 1991,
            'value': 0.12050198
          }, {
            'year': 1992,
            'value': 0.135813811
          }, {
            'year': 1993,
            'value': 0.156584082
          }, {
            'year': 1994,
            'value': 0.138943827
          }, {
            'year': 1995,
            'value': 0.122501056
          }, {
            'year': 1996,
            'value': 0.124101423
          }, {
            'year': 1997,
            'value': 0.112241421
          }, {
            'year': 1998,
            'value': 0.102
          }]
        };
    };
    var _dummy_indicator_2 = function() {
      return {
          name: 'Variable categórica',
          city: 'Ibengue',
          type: 'subjetivo ordinal',
          timeline: [{
            'year': 1989,
            'value': [{name: 'Sí', value: .1 }, {name: 'No', value: .2 }]
          }, {
            'year': 1990,
            'value': [{name: 'Sí', value: .1 }, {name: 'No', value: .2 }]
          }, {
            'year': 1991,
            'value': [{name: 'Sí', value: .1 }, {name: 'No', value: .2 }]
          }, {
            'year': 1992,
            'value': [{name: 'Sí', value: .1 }, {name: 'No', value: .2 }]
          }, {
            'year': 1993,
            'value': [{name: 'Sí', value: .1 }, {name: 'No', value: .2 }]
          }, {
            'year': 1994,
            'value': [{name: 'Sí', value: .1 }, {name: 'No', value: .2 }]
          }, {
            'year': 1995,
            'value': [{name: 'Sí', value: 0.6175 }, {name: 'No', value: 0.3825 }]
          }, {
            'year': 1996,
            'value': [{name: 'Sí', value: 0.39 }, {name: 'No', value: 0.61 }]
          }, {
            'year': 1997,
            'value': [{name: 'Sí', value: 0.45 }, {name: 'No', value: 0.55 }]
          }, {
            'year': 1998,
            'value': [{name: 'Sí', value: 0 }, {name: 'No', value: 0 }]
          }]
        };
    };

    var _dummy_cities = function() {
      return [
          {
            "name": "Bogotá",
            "categories": [
              {
                "name": "Optimismo y bienestar subjetivo 1",
                "indicators": [
                  {
                    "name": "Tasa de Desempleo 1",
                    "type": "objetivo",
                    "description": "Tasa de desempleo 1 "
                  },
                  {
                    "name": "CV6A 1",
                    "type": "subjetivo categorico 1",
                    "description": "Independientemente si usted nació o no en [CIUDAD], se siente de [CIUDAD] o de otra parte del país?"
                  },
                  {
                    "name": "CO3 1",
                    "type": "subjetivo ordinal 1",
                    "description": "¿En general cómo califica la calidad de la información que recibe?"
                  }
                ]
              },
              {
                "name": "Calidad De Vida",
                "indicators": [
                  {
                    "name": "Tasa de Desempleo 1",
                    "type": "objetivo",
                    "description": "Tasa de desempleo"
                  },
                  {
                    "name": "CV6A 1",
                    "type": "subjetivo categorico",
                    "description": "Independientemente si usted nació o no en [CIUDAD], se siente de [CIUDAD] o de otra parte del país?"
                  },
                  {
                    "name": "CO3 1",
                    "type": "subjetivo ordinal",
                    "description": "¿En general cómo califica la calidad de la información que recibe?"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ibagué",
            "categories": [
              {
                "name": "Optimismo y bienestar subjetivo 2",
                "indicators": [
                  {
                    "name": "Tasa de Desempleo 2",
                    "type": "objetivo",
                    "description": "Tasa de desempleo"
                  },
                  {
                    "name": "CV6A 2",
                    "type": "subjetivo categorico",
                    "description": "Independientemente si usted nació o no en [CIUDAD], se siente de [CIUDAD] o de otra parte del país?"
                  },
                  {
                    "name": "CO3 2",
                    "type": "subjetivo ordinal",
                    "description": "¿En general cómo califica la calidad de la información que recibe?"
                  }
                ]
              },
              {
                "name": "Calidad De Vida 2",
                "indicators": [
                  {
                    "name": "Tasa de Desempleo 2",
                    "type": "objetivo",
                    "description": "Tasa de desempleo"
                  },
                  {
                    "name": "CV6A 2",
                    "type": "subjetivo categorico",
                    "description": "Independientemente si usted nació o no en [CIUDAD], se siente de [CIUDAD] o de otra parte del país?"
                  },
                  {
                    "name": "CO3 2",
                    "type": "subjetivo ordinal",
                    "description": "¿En general cómo califica la calidad de la información que recibe?"
                  }
                ]
              }
            ]
          }
        ];
    };

    return {
      cities: _cities,
      indicator: _indicator,

      // dummy datasets
      dummy_cities: _dummy_cities,
      dummy_indicator_1: _dummy_indicator_1,
      dummy_indicator_2: _dummy_indicator_2
    };
  }]);
