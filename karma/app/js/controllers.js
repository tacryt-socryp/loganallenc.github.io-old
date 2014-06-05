'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', function($scope) {
}])
.controller('MyCtrl2', ['$scope', function($scope) {
}])
.controller('MyCtrl3', ['$scope', function($scope) {
}])
.controller('numberCtrl', ['$scope', function($scope) {
    $scope.number = 0.0;

    $scope.incrementNumber = function() {
        $scope.number = $scope.number + 0.1;
        $scope.number = Number(($scope.number).toFixed(1));
    }
}])
.controller('translateCtrl', ['$scope', function($scope) {
    $scope.translate = {
        english: 'Coffee.',
        foreign: ''
    };

    $scope.translateThis = function() {

        var link =  'https://www.googleapis.com/language/translate/v2' +
            '?key=AIzaSyDO4fBy8E3mlo_V6dUO1jawJf4oO5VVZlY' +
            '&source=en&target=de&q=' +
            encodeURIComponent($scope.translate.english);
        $http({method: 'GET', url: link}).
        success(function(data, status, headers, config) {
            $scope.translate.foreign = data.data.translations[0].translatedText;
        }).
        error(function(data, status, headers, config) {
            console.log(status);
        });
    }
}]);