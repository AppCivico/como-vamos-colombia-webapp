'use strict';

/**
 * @ngdoc service
 * @name comoVamosColombiaApp.Graph
 * @description
 * # Graph
 * Service in the comoVamosColombiaApp.
 */
angular.module('comoVamosColombiaApp')
  .service('Graph', ['Defaults', 'lodash', function (Defaults, lodash) {
      var buildObjectiveLine = function(indicatorName, indicatorCity, indicatorData){
        console.log(indicatorName);
        console.log(indicatorCity);
        console.log(indicatorData);
        var _serie = {
          name: indicatorName,
          type: 'spline',
          // tooltip options missing to build
          // tooltip: {
          //   valueSuffix: ' S/U'
          // }
        };

        // Build the data object
        _serie.data =  lodash.map(indicatorData, function(data){
          return [data.year.toString(), data.value];
        });

        return _serie;
      };

      var buildGraphSeries = function(datum) {
        return lodash.map(datum, function(indicatorData){
          // Determine which kind of line we're building
          switch(indicatorData.type) {
            case 'objetivo':
            // code here ...
            return buildObjectiveLine(indicatorData.name, indicatorData.city, indicatorData.timeline);
            // break;

            case 'subjetivo ordinal':
            // code here ...
            break;

            case 'subjetivo categorico':
            // code here ...
            break;
          }
        });
        // return [
        //   {
        //     name: 'Si',
        //     type: 'column',
        //     yAxis: 1,
        //     data: [
        //       ['1989', 0],
        //       ['1990', 0],
        //       ['1991', 0],
        //       ['1992', 0],
        //       ['1993', 0],
        //       ['1994', 0],
        //       ['1995', 0.6175],
        //       ['1996', 0.39],
        //       ['1997', 0.45],
        //       ['1998', 0],
        //     ],
        //     tooltip: {
        //         valueSuffix: ' % de Encuestados'
        //     },
        //     stack: "1",
        //   }, {
        //       name: 'No',
        //       type: 'column',
        //       yAxis: 1,
        //       data: [
        //         ['1989', 0],
        //         ['1990', 0],
        //         ['1991', 0],
        //         ['1992', 0],
        //         ['1993', 0],
        //         ['1994', 0],
        //         ['1995', 0.3825],
        //         ['1996', 0.61],
        //         ['1997', 0.55],
        //         ['1998', 0],
        //       ],
        //       tooltip: {
        //           valueSuffix: ' % de Encuestados'
        //       },
        //       stack: "1",
        //   }];
      };


      var _chartConfig = function(datum) {
        return {
          "options": {
            "chart": {
              zoomType: 'xy'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            xAxis: {
              type: 'category',
              labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
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
          series: buildGraphSeries(datum),
        };
      };

      return {
        // buildDatum: _buildDatum,
        chartConfig: _chartConfig
      };
  }]);
