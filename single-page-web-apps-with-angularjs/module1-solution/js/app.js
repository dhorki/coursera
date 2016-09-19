(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchCheck = function() {
    var count = 0;
    var difMessage = "";
    if ($scope.list != undefined) {
      var arrayList;
      arrayList = $scope.list.split(",");

      for (var i = 0; i < arrayList.length; i++) {
        if (arrayList[i].trim().length > 0) {
          count++;
        }//if
      }//for
      var dif = 0;
      dif = arrayList.length - count;

      difMessage = dif > 0 ? " (" + dif + " empty items not counted)" : "";

    }
    if (count == 0) {
      $scope.message = "Please enter data first" + difMessage;
      $scope.format = "red";
    } else if (count <= 3) {
      $scope.message = "Enjoy!" + difMessage;
      $scope.format = "green";
    } else {
      $scope.message = "Too much!" + difMessage;
      $scope.format = "green";
    }//else
  }
}

})();
