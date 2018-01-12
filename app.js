(function() {
    'use strict';

    angular.module('pdfShow', ["firebase","pdf","ngm.ngDrive"])
        .controller('AddController', AddController)
        .service('GetDataService', GetDataService)
        .component('pdfShow', {
            templateUrl: 'pdfShow.html',
            bindings: {
                pdfUrl: '<',
            },

            controller: pdfShowController
        });
        

   angular.module('ngm.ngDrive')
        .provider('OauthService', ngDrive.Config)
    .config(function (OauthServiceProvider) {
        OauthServiceProvider.setScopes('https://www.googleapis.com/auth/drive');
        OauthServiceProvider.setClientID('566153587947-h2a4n5jp906egkkcap6g33f6fo3ssr0g.apps.googleusercontent.com');
    });



    AddController.$inject = ['DriveService','$scope'];

    function AddController(DriveService,$scope) {
        var pdf = this;
        
  $scope.fetchedFile = DriveService.children.list('0B_JmUVVSA4onRjZOTWRkZm1BVWc').data;

   











    

    };

    //Get data from firebase Datase
    GetDataService.$inject = ['$firebaseArray'];

    function GetDataService($firebaseArray) {

        

    };



   pdfShowController.$inject = ['$scope'];


  function pdfShowController($scope) {
var $ctrl= this;
 $scope.pdfUrl = '/77.pdf';
        

    };










})();