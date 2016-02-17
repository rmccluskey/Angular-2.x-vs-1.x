import * as Interfaces from './interfaces';

export function CharacterDirective() {
    return {
        restrict: "E",
        templateUrl: "./app/character.partial.html"
        scope: {
            character: "="
        }
    }
}

export var CharacterDirectiveName: string = "character";