import {AppDirective, AppDirectiveName} from './app';
import {ShowDirective, ShowDirectiveName} from './show.directive';
import {CharacterDirective, CharacterDirectiveName} from './character.directive';
import {ShowService, ShowServiceName} from './show.service';

var moduleName: string = "myApplication";
angular.module(moduleName, [])
    .directive(AppDirectiveName, AppDirective)
    .directive(ShowDirectiveName, ShowDirective)
    .directive(CharacterDirectiveName, CharacterDirective)
    .service(ShowServiceName, ShowService);

angular.bootstrap(document, [moduleName]);
