var App;
(function (App) {
    var RealtimeApp;
    (function (RealtimeApp) {
        angular.module("realtimeApp", ['ngRoute',
            'ng',
            'ngAnimate',
            'toaster',
            'SignalR'
        ]);
    })(RealtimeApp = App.RealtimeApp || (App.RealtimeApp = {}));
})(App || (App = {}));
//# sourceMappingURL=app.module.js.map