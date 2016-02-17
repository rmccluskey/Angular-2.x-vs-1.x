import {Component, Input} from 'angular2/core';
import * as Interfaces from './interfaces';

@Component({
    selector: 'character',
    moduleId: module.id,
    templateUrl: "./character.partial.html"
})
export class CharacterComponent {
    @Input() character: Interfaces.ICharacter;

    constructor() {

    }
}