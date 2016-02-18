import {Component} from 'angular2/core';
import {ShowService} from './show.service';
import {ShowComponent} from './show.component';
import {CharacterComponent} from './character.component';
import * as Interfaces from './interfaces';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.partial.html',
    directives: [ShowComponent, CharacterComponent],
    providers: [ShowService]
})
export class AppComponent {
    public selectedShow: Interfaces.IShow;
    public shows: Array<Interfaces.IShowResponse>; 
    public isLoading: boolean;

    constructor(private showService: ShowService) {
    }

    search(term) {
        this.isLoading = true;
        this.showService.search(term).then((shows) => {
            this.shows = shows;
            this.isLoading = false;
        });
    }  

    selectShow(showResponse: Interfaces.IShowResponse) {
        this.selectedShow = showResponse.show;
        if (!this.selectedShow.cast) {
            this.isLoading = true;
            this.showService.getCast(this.selectedShow.id).then((cast) => {
                this.selectedShow.cast = cast;
                this.isLoading = false;
            });
        }
    }

    goBack() {
        this.selectedShow = null;
    }
}