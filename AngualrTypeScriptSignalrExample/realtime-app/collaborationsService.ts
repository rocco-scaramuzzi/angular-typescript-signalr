module App.RealtimeApp{

    export class CollaborationService {

        static $inject = ['$rootScope', 'toaster', 'Hub'];
        constructor(
            private $rootScope: ng.IRootScopeService,
            private toaster: any,
            private Hub: ngSignalr.HubFactory) {
        
            this.init();
        }

        private signalrHub: ngSignalr.Hub = null;

        private init(): void {

            this.signalrHub = new this.Hub('collaborationHub',
                {
                    rootPath: '',
                    listeners: {
                        'showNewChangeNotification': (changeMessage: string) => { this.showNewChangeNotification(changeMessage); }
                    },
                    methods: ['sendToOthersMyChangeNotification']

                });
            this.signalrHub.connect();
        }

        public sendOthersChangeNotification(message: string) {
            this.signalrHub.invoke('sendToOthersMyChangeNotification', message);
        }


        private showNewChangeNotification(changeMessage: string): void {
            this.toaster.pop({
                type: 'warning',
                title: 'New change',
                body: changeMessage,
                timeout: 0
            });
            this.$rootScope.$apply();
        }

    }

    angular
        .module("realtimeApp")
        .service("collaborationService",
        CollaborationService);

}