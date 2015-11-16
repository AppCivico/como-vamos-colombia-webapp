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
        self.data = Api.dummy_cities();

        // Uncomment this for real functionality
        // Api.cities().then(function successCallback(response){
        //   // Fetch graph config options
        //   // self.chartConfig = Graph.chartConfig(null);
        //   // self.showChart = true;
        // }, function errorCallback(response){
        //   console.error(response);
        //   // self.showChart = false;
        // });
      };

      self.drawGraph = function() {
        self.showChart = true;

        // Fetch the info to draw the graph



        // Give time for the container to draw
        $timeout(function(){
          // self.chartConfig = Graph.chartConfig(self.data);
          self.chartConfig = Graph.chartConfig(Api.dummy_indicators());
        }, 1000);
      };

      self.initialize();
  }]);
