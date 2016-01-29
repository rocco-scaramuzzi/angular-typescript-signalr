module App.RealtimeApp {
    angular
        .module("realtimeApp")
        .config(routeConfig);

    routeConfig.$inject = ["$routeProvider", "$locationProvider"];

    function routeConfig($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {

        $routeProvider
            .when("/cities",
            {
                templateUrl: "/realtime-app/city.html",
                controller: CitiesCtrl,
                controllerAs: 'CitiesCtrl'
            })
            .otherwise("/cities");

        $locationProvider.html5Mode(false);
    }
}