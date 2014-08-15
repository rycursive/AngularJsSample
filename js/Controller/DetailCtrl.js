app.controller('DetailCtrl',
    function ($scope, $location, $routeParams, venueService) {
        var venueId = $routeParams.venueId;
        $scope.loading = true;
        $scope.back = function () {
            $location.path('/');
        };
        venueService.get({ venueId: venueId }, function (venueResult) {
            $scope.loading = false;
            $scope.venue = venueResult.response.venue;
        });
    });