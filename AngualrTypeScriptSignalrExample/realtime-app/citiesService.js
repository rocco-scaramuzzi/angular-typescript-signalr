var App;
(function (App) {
    var RealtimeApp;
    (function (RealtimeApp) {
        var CitiesService = (function () {
            function CitiesService(collaborationService) {
                this.collaborationService = collaborationService;
                this.cities = [
                    new RealtimeApp.City("SW311QQ", "London", "UK"),
                    new RealtimeApp.City("70029", "Santeramo in Colle", "Italy"),
                    new RealtimeApp.City("70121", "Bari", "Italy")];
            }
            CitiesService.prototype.getCities = function () {
                return this.cities;
            };
            CitiesService.prototype.addCity = function () {
                this.cities.push(new RealtimeApp.City("", "", ""));
                this.collaborationService.sendOthersChangeNotification("A new City has been added");
            };
            CitiesService.prototype.deleteCity = function (cityToDelete) {
                var index = this.cities.indexOf(cityToDelete);
                if (index === -1)
                    return;
                this.cities.splice(index, 1);
                this.collaborationService.sendOthersChangeNotification("The city with " + cityToDelete.posteCode + " post code has been deleted");
            };
            CitiesService.prototype.updateCity = function (cityToDelete) {
                this.collaborationService.sendOthersChangeNotification("The city with " + cityToDelete.posteCode + " post code has been updated");
            };
            CitiesService.$inject = ['collaborationService'];
            return CitiesService;
        })();
        RealtimeApp.CitiesService = CitiesService;
        angular
            .module("realtimeApp")
            .service("citiesService", CitiesService);
    })(RealtimeApp = App.RealtimeApp || (App.RealtimeApp = {}));
})(App || (App = {}));
//# sourceMappingURL=citiesService.js.map