(function() {
    'use strict';

    angular.module('pdfShow', ["firebase","pdf",])
        .controller('AddController', AddController)
        .service('GetDataService', GetDataService)
        .component('pdfShow', {
            templateUrl: 'pdfShow.html',
            bindings: {
                pdfUrl: '<',
            },

            controller: pdfShowController
        });
        



    AddController.$inject = ["firebase",'$scope'];

    function AddController($scope) {
        var pdf = this;
        
  

   











    

    };

    //Get data from firebase Datase
    GetDataService.$inject = ['$firebaseArray'];

    function GetDataService($firebaseArray) {

        

    };



   pdfShowController.$inject = ['$scope'];


  function pdfShowController($scope) {
var $ctrl= this;
 





    };










})();