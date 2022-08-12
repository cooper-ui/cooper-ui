import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
// --------------------------------------------------------
import { CooperBackgroundColorDirective } from './background-color.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CooperBackgroundColorDirective,
    ],
    exports: [
        CooperBackgroundColorDirective,
    ],
    providers: [],
})
export class CooperDirectivesModule { }
