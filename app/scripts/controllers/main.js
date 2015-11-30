'use strict';

/**
 * @ngdoc function
 * @name comoVamosColombiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comoVamosColombiaApp
 */
angular.module('comoVamosColombiaApp')
  .controller('MainCtrl', ['$timeout', 'Api', 'Graph', function ($timeout, Api, Graph) {
      var self = this;
      self.firstSelectedOption = {
        city: undefined,
        category: undefined,
        indicator: undefined,
      };

      self.secondSelectedOption = {
        city: undefined,
        category: undefined,
        indicator: undefined,
      };

      self.initialize = function() {
        // Comment this when using real data
        self.showChart = false;
        //self.data = Api.dummy_cities();
        //self.data = Api.cities();
        var city_data = [];
        var indicator_1 = [];
        var indicator_2 = [];
        self.drawGraph(indicator_1,indicator_2);

        // Uncomment this for real functionality
        Api.cities().then(function successCallback(response){
        //   // Fetch graph config options
            response.data.forEach(function(val, i) {
                city_data.push(val);
            });
            self.chartConfig = Graph.chartConfig(null);
            self.showChart = true;
            }, function errorCallback(response){
                console.error(response);
                self.showChart = false;
            });
            self.data = city_data;
      };

      self.drawGraph = function() {
        self.showChart = true;
        var indicator_1 = []
        Api.indicator(self.firstSelectedOption.city, self.firstSelectedOption.indicator).then(function successCallback(response){
            response.data.forEach(function(val, i) {
                indicator_1.push(val);
            });
         }, function errorCallback(response){
             console.error(response);
             self.showChart = false;
         });
        // Fetch the info indicator 2 to draw the graph
        // Code here..
        var indicator_2 = []
         Api.indicator(self.secondSelectedOption.city, self.secondSelectedOption.indicator).then(function successCallback(response){
             response.data.forEach(function(val, i) {
                 indicator_2.push(val);
             });
         }, function errorCallback(response){
             console.error(response);
             self.showChart = false;
         })

        // Give time for the container to draw
        $timeout(function(){

          //self.chartConfig = Graph.chartConfig([Api.dummy_indicator_1(), Api.dummy_indicator_2()]);
          self.chartConfig = Graph.chartConfig([indicator_1[0], indicator_2[0]]);
          console.log(self.chartConfig)
        }, 1000);
      };

      self.initialize();
  }]);
