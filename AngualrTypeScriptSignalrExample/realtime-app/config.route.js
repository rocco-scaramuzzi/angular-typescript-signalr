var App;
(function (App) {
    var RealtimeApp;
    (function (RealtimeApp) {
        angular
            .module("realtimeApp")
            .config(routeConfig);
        routeConfig.$inject = ["$routeProvider", "$locationProvider"];
        function routeConfig($routeProvider, $locationProvider) {
            $routeProvider
                .when("/cities", {
                templateUrl: "/realtime-app/city.html",
                controller: RealtimeApp.CitiesCtrl,
                controllerAs: 'CitiesCtrl'
            })
                .otherwise("/cities");
            $locationProvider.html5Mode(false);
        }
    })(RealtimeApp = App.RealtimeApp || (App.RealtimeApp = {}));
})(App || (App = {}));
//# sourceMappingURL=config.route.js.map