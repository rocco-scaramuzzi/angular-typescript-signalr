module App.RealtimeApp {

    export class CitiesService {
      
        
        static $inject = ['collaborationService'];
        constructor(private collaborationService: CollaborationService) {
            this.cities = [
                new City("SW311QQ", "London", "UK")
                , new City("70029", "Santeramo in Colle", "Italy")
                , new City("70121","Bari", "Italy")];
        }

        private cities : City[];

        getCities(): City[] {

            return this.cities;
        }

        addCity():void {
            this.cities.push(new City("", "", ""));
            this.collaborationService.sendOthersChangeNotification("A new City has been added");
        }

        deleteCity(cityToDelete:City): void {
            var index = this.cities.indexOf(cityToDelete);
            if (index === -1) return;
            this.cities.splice(index, 1);
            this.collaborationService.sendOthersChangeNotification("The city with " + cityToDelete.posteCode +" post code has been deleted");
        }

        updateCity(cityToDelete: City): void {
            this.collaborationService.sendOthersChangeNotification("The city with " + cityToDelete.posteCode + " post code has been updated");
        }


    }

    angular
        .module("realtimeApp")
        .service("citiesService",
        CitiesService);

}