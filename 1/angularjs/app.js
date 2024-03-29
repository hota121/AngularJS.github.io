(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageStyle = {};

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',').filter(function (item) {
                return item.trim() !== "";
            });

            if (items.length === 0) {
                $scope.message = "Please enter the menu details";
                $scope.messageStyle = { color: 'red', border: '1px solid red' };
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageStyle = { color: 'green', border: '2px solid green' };
            } else{
                $scope.message = "Too much!";
                $scope.messageStyle = { color: 'yellow', border: '1px solid yellow' };
            }
        };
    }
})();