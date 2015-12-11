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
          return datum[0].name + ' vs ' + datum[1].name;
        }
          return datum[0].name;
        }

      var _buildObjectiveLine = function(indicatorName, indicatorDescription, indicatorCity, indicatorTimeline, IndicatorUnits, DataAxis){
        var _serie = {
          name: indicatorCity,
          type: 'spline',
          stack: DataAxis,
          zIndex: 2,
          // tooltip options missing to build
          tooltip: {
             valueSuffix: ' ' + IndicatorUnits
           }
          // add other options as needed
        };

        // Build the data object
        _serie.data =  lodash.map(indicatorTimeline, function(data){
          return [parseFloat(data.year), parseFloat(data.value)];
        });
        _serie.yAxis = DataAxis;


        return _serie;
      };

      var _buildSubjectiveCategorical = function(indicatorName, indicatorDescription, indicatorCity, indicatorTimeline,IndicatorUnits,DataAxis) {
        if(indicatorTimeline.length === 0 ) return ;

        // Get the name of the stacks from first data point
        var _first_item = indicatorTimeline[0].value;
        // console.log(_first_item);
        var _options = lodash.pluck(_first_item, 'name');
        // console.log(_options);

        // Build stack objects
        var _stacks = lodash.map(_options, function(stackName){
          var _serie = {
            name: indicatorCity + " : " + stackName,
            type: 'column',
            yAxis: DataAxis,
            stack: DataAxis,
            zIndex: 1,
            tooltip: {
               valueSuffix: ' ' + IndicatorUnits
             }
          };

          // Build the data object
          _serie.data =  lodash.map(indicatorTimeline, function(data){
            var _value = lodash.result( lodash.findWhere(data.value, { 'name': stackName }), 'value');
            return [parseFloat(data.year), parseFloat(_value)];
          });

          return _serie;
        });

        return _stacks;
      };

      var _buildGraphSeries = function(datum) {
        var DataAxis = -1;
        if (datum.length > 1){
          if (datum[0].name == datum[1].name){
            var shareaxis = 1
          };
        } else {
          shareaxis = 0
        };
        return lodash.flatten(lodash.map(datum, function(indicatorData){
          var indicatorDataUnits = indicatorData.units;
          if(indicatorDataUnits=="NaN"){
            indicatorDataUnits=""
          };


          // Determine which kind of line we're building
          if (indicatorData.timeline.length > 0) {
            switch(indicatorData.type) {
              case 'objetivo':
              DataAxis = DataAxis + 1;
              if(shareaxis == 1){
                DataAxis = 0
              };
              return _buildObjectiveLine(indicatorData.name, indicatorData.description, indicatorData.city, indicatorData.timeline, indicatorDataUnits, DataAxis);

              case 'subjetivo ordinal':
              DataAxis = DataAxis + 1;
              if(shareaxis == 1){
                DataAxis = 0
              };
              return _buildObjectiveLine(indicatorData.name, indicatorData.description, indicatorData.city, indicatorData.timeline, indicatorDataUnits, DataAxis);

              case 'subjetivo categorico':
              DataAxis = DataAxis + 1;
              if(shareaxis == 1){
                DataAxis = 0
              };
              return _buildSubjectiveCategorical(indicatorData.name, indicatorData.description, indicatorData.city, indicatorData.timeline, indicatorDataUnits, DataAxis);

            }}}));
      };


      var _chartConfig = function(datum) {
        datum = datum.filter(function(n){ return n.name != undefined });
        return {
          options: {
            credits: false ,
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
                title: {
                    text: '',
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
          series: _buildGraphSeries(datum),
          title: {
            // Removed due client observation
            // text: _buildChartTitle(datum)
            text: " "
          }
        };
      };
      return {
        // buildDatum: _buildDatum,
        chartConfig: _chartConfig
      };
  }]);
