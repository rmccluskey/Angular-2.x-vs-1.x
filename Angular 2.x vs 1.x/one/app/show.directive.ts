import * as Interfaces from './interfaces';

export function ShowDirective() {
    return {
        restrict: "E",
        templateUrl: "./app/show.partial.html",
        scope: {
            show: "="
        }
    }
}

export var ShowDirectiveName: string = "show";