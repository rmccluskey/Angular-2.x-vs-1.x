import {Component, Input} from 'angular2/core';
import * as Interfaces from './interfaces';

@Component({
    selector: 'show',
    moduleId: module.id,
    templateUrl: 'show.partial.html' 
})
export class ShowComponent {
    @Input() show: Interfaces.IShow;

    constructor() {

    }  
}