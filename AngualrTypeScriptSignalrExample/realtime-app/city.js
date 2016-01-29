var App;
(function (App) {
    var RealtimeApp;
    (function (RealtimeApp) {
        var City = (function () {
            function City(posteCode, name, country) {
                this.posteCode = posteCode;
                this.name = name;
                this.country = country;
            }
            return City;
        })();
        RealtimeApp.City = City;
    })(RealtimeApp = App.RealtimeApp || (App.RealtimeApp = {}));
})(App || (App = {}));
//# sourceMappingURL=city.js.map