gardenApp.controller("tasksCtrl", function ($scope, $log, $http, $location, activeUser) {
    $scope.user = activeUser.get();

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.user = activeUser.get();

    $scope.newtask = function () {
        $location.path("/newtask");
    };
    $scope.reports = function () {
        $location.path("/reports");
    }

});