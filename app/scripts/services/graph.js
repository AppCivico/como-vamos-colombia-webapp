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
      var _buildChartTitle = function(datum) {
        if(datum.length > 1) {
          console.log(datum[0].name + ' vs ' + datum[1].name);
          return datum[0].name + ' vs ' + datum[1].name
        }
        console.log(datum[0].name);
        return datum[0].name;
      };

      var _buildObjectiveLine = function(indicatorName, indicatorCity, indicatorData){
        var _serie = {
          name: indicatorName,
          type: 'spline',
          stack: '1',
          // tooltip options missing to build
          // tooltip: {
          //   valueSuffix: ' S/U'
          // }
          // add other options as needed
        };

        // Build the data object
        _serie.data =  lodash.map(indicatorData, function(data){
          return [data.year.toString(), data.value];
        });


        return _serie;
      };

      var _buildSubjectiveOrdinal = function(indicatorName, indicatorCity, indicatorData) {
        if(indicatorData.length === 0 ) return ;

        // Get the name of the stacks from first data point
        var _first_item = indicatorData[0].value;
        // console.log(_first_item);
        var _options = lodash.pluck(_first_item, 'name');
        // console.log(_options);

        // Build stack objects
        var _stacks = lodash.map(_options, function(stackName){
          var _serie = {
            name: stackName,
            type: 'column',
            yAxis: 1
            // add other options as needed
          };

          // Build the data object
          _serie.data =  lodash.map(indicatorData, function(data){
            var _value = lodash.result( lodash.findWhere(data.value, { 'name': stackName }), 'value');
            return [data.year.toString(), _value];
          });

          return _serie;
        });

        return _stacks;
      };

      var _buildGraphSeries = function(datum) {
        return lodash.flatten(lodash.map(datum, function(indicatorData){
          // Determine which kind of line we're building
          switch(indicatorData.type) {
            case 'objetivo':
            return _buildObjectiveLine(indicatorData.name, indicatorData.city, indicatorData.timeline);

            case 'subjetivo ordinal':
            return _buildSubjectiveOrdinal(indicatorData.name, indicatorData.city, indicatorData.timeline);

            case 'subjetivo categorico':
            return _buildSubjectiveOrdinal(indicatorData.name, indicatorData.city, indicatorData.timeline);          }
        }));
      };


      var _chartConfig = function(datum) {
        return {
          options: {
            chart: {
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
          series: _buildGraphSeries(datum),
          title: {
            text: _buildChartTitle(datum)
          }
        };
      };

      return {
        // buildDatum: _buildDatum,
        chartConfig: _chartConfig
      };
  }]);
