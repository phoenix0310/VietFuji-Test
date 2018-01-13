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
 

$scope.pdfUrl='https://firebasestorage.googleapis.com/v0/b/vfdict-f07f9.appspot.com/o/77_pdf%20ch%C6%B0%C6%A1ng%201.pdf?alt=media&token=9bafc631-232f-4ede-a5dd-578bc047eae3';



    };










})();