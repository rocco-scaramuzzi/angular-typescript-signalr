module App.RealtimeApp {

    export class CitiesCtrl{

        static $inject = ["citiesService"];
        constructor(public citiesService: CitiesService) {
            this.cities = citiesService.getCities();
            this.isEditMode = false;
        }
        cities: City[];
        isEditMode: boolean;
    }

    angular
        .module("realtimeApp")
        .controller("citiesCtrl",
        CitiesCtrl);

}