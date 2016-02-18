import * as Interfaces from "./interfaces";
import {ShowService, ShowServiceName} from "./show.service";

interface IAppScope {
    selectedShow: Interfaces.IShow;
    shows: Array<Interfaces.IShowResponse>;
    isLoading: boolean;
}

export function AppDirective() {
    return {
        restrict: "E",
        templateUrl: "./app/app.partial.html",
        controller: AppController
    }
}

export var AppDirectiveName: string = "myApp";

class AppController {
    static $inject = ["$scope", ShowServiceName];

    constructor(private $scope, private showService: ShowService) {
        $scope.controller = this;
    }

    search(term) {
        this.$scope.isLoading = true;
        this.showService.search(term).then((shows) => {
            this.$scope.shows = shows;
            this.$scope.isLoading = false;
        });
    }

    selectShow(showResponse: Interfaces.IShowResponse) {
        this.$scope.selectedShow = showResponse.show;
        if (!this.$scope.selectedShow.cast) {
            this.$scope.isLoading = true;
            this.showService.getCast(this.$scope.selectedShow.id).then((cast) => {
                this.$scope.selectedShow.cast = cast;
                this.$scope.isLoading = false;
            });
        }
    }

    goBack() {
        this.$scope.selectedShow = null;
    }
}