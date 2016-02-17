import {IShowResponse} from "./interfaces";

export class ShowService {
    private baseUrl: string = "http://api.tvmaze.com/";

    static inject = ["$http"];
    constructor(private $http) {
    }

    search(term: string) {
        return this.$http.get(this.baseUrl + "search/shows?q=" + term)
            .then(response => response.data);      
    }

    getCast(id: number) {
        return this.$http.get(this.baseUrl + "shows/" + id + "/cast")
            .then(response => response.data);
    }
}

export var ShowServiceName: string = "ShowService";