(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.dishes = "";

  $scope.check = function () {
    if($scope.dishes!=null && $scope.dishes!=""){
      $scope.arr=$scope.dishes.split(",");
      if($scope.arr.length<=3){
        $scope.msg = "Enjoy!";
      }
      else{
        $scope.msg = "Too much!";
      }
    }
    else{
      $scope.msg ="Please enter data first";
    }
  };
}


})();
