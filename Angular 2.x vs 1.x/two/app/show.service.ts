import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import {IShowResponse, ICastResponse} from './interfaces';

@Injectable()
export class ShowService {
    private baseUrl: string = "http://api.tvmaze.com/";

    constructor(private http: Http) {
    }

    search(term: string): Promise<Array<IShowResponse>> {                      
        var search = new URLSearchParams();
        search.set("q", term);
        return this.http.get(this.baseUrl + "search/shows", { search })
            .toPromise()
            .then(response => <Array<IShowResponse>>response.json());            
    }

    getCast(id: number): Promise<Array<ICastResponse>> {
        return this.http.get(this.baseUrl + "shows/" + id + "/cast")
            .toPromise()
            .then(response => <Array<ICastResponse>>response.json());
    }

}