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
    var baseUrl = 'http://104.154.49.35:5000/';
    var apiCall = {
      cities: baseUrl + 'cities',
    };

    var _initialize = function() {
      return $http.get(apiCall.cities);
    };

    var _dummy = function() {
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
      initialize: _initialize,
      dummy: _dummy
    };
  }]);
