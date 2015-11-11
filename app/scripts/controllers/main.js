'use strict';

/**
 * @ngdoc function
 * @name comoVamosColombiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comoVamosColombiaApp
 */
angular.module('comoVamosColombiaApp')
  .controller('MainCtrl', ['Api', function (Api) {
      var self = this;

      self.chartConfig = {
          "options": {
            "chart": {
              zoomType: 'xy'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            yAxis: [{ // Primary yAxis
                labels: {
                    formatter: function () {
                        return this.value;
                    },
                    style: {
                      color: '#000'
                    }
                },
                title: {
                    text: '',
                    style: {
                      color: '#000'
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: '% de Encuestados',
                    style: {
                      color: '#000'
                    }
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    },
                    style: {
                      color: '#000'
                    }
                },
                opposite: true
            }],
          },



          series: [{
              name: 'Si',
              type: 'column',
              yAxis: 1,
              data: [0, 0, 0, 0, 0 , 0, 0.6175, 0.39, 0.45, 0],
              tooltip: {
                  valueSuffix: ' % de Encuestados'
              },
          stack: "1",
          }, {
              name: 'No',
              type: 'column',
              yAxis: 1,
              data: [0, 0, 0, 0, 0 , 0, 0.3825, 0.61, 0.55, 0],
              tooltip: {
                  valueSuffix: ' % de Encuestados'
              },
          stack: "1",
          }, {
              name: 'Índice de Desempleo',
              type: 'spline',
              data: [0.137679449,0.13449362,0.12050198,0.135813811,0.156584082,0.138943827,0.122501056,0.124101423,0.112241421,0.102],
              tooltip: {
                  valueSuffix: ' S/U'
              }
          }],


          "title": {
            "text": "Hello"
          },
          "credits": {
            "enabled": true
          },
          "loading": false,
          "size": {}
        };

  }]);
