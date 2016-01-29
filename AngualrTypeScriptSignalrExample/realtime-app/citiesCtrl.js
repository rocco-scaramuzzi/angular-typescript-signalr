var App;
(function (App) {
    var RealtimeApp;
    (function (RealtimeApp) {
        var CitiesCtrl = (function () {
            function CitiesCtrl(citiesService) {
                this.citiesService = citiesService;
                this.cities = citiesService.getCities();
                this.isEditMode = false;
            }
            CitiesCtrl.$inject = ["citiesService"];
            return CitiesCtrl;
        })();
        RealtimeApp.CitiesCtrl = CitiesCtrl;
        angular
            .module("realtimeApp")
            .controller("citiesCtrl", CitiesCtrl);
    })(RealtimeApp = App.RealtimeApp || (App.RealtimeApp = {}));
})(App || (App = {}));
//# sourceMappingURL=citiesCtrl.js.map