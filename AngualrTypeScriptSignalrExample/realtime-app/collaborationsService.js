var App;
(function (App) {
    var RealtimeApp;
    (function (RealtimeApp) {
        var CollaborationService = (function () {
            function CollaborationService($rootScope, toaster, Hub) {
                this.$rootScope = $rootScope;
                this.toaster = toaster;
                this.Hub = Hub;
                this.signalrHub = null;
                this.init();
            }
            CollaborationService.prototype.init = function () {
                var _this = this;
                this.signalrHub = new this.Hub('collaborationHub', {
                    rootPath: '',
                    listeners: {
                        'showNewChangeNotification': function (changeMessage) { _this.showNewChangeNotification(changeMessage); }
                    },
                    methods: ['sendToOthersMyChangeNotification']
                });
                this.signalrHub.connect();
            };
            CollaborationService.prototype.sendOthersChangeNotification = function (message) {
                this.signalrHub.invoke('sendToOthersMyChangeNotification', message);
            };
            CollaborationService.prototype.showNewChangeNotification = function (changeMessage) {
                this.toaster.pop({
                    type: 'warning',
                    title: 'New change',
                    body: changeMessage,
                    timeout: 0
                });
                this.$rootScope.$apply();
            };
            CollaborationService.$inject = ['$rootScope', 'toaster', 'Hub'];
            return CollaborationService;
        })();
        RealtimeApp.CollaborationService = CollaborationService;
        angular
            .module("realtimeApp")
            .service("collaborationService", CollaborationService);
    })(RealtimeApp = App.RealtimeApp || (App.RealtimeApp = {}));
})(App || (App = {}));
//# sourceMappingURL=collaborationsService.js.map