import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
// --------------------------------------------------------
import { CooperBackgroundColorDirective } from './colors/background-color.directive';
import { CooperColorDirective }           from './colors/color.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CooperBackgroundColorDirective,
        CooperColorDirective,
    ],
    exports: [
        CooperBackgroundColorDirective,
        CooperColorDirective,
    ],
    providers: [ ],
})
export class CooperDirectivesModule { }
