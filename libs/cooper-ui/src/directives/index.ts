import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
// --------------------------------------------------------
import { CuiBackgroundColorDirective } from './colors/background-color.directive';
import { CuiColorDirective }           from './colors/color.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CuiBackgroundColorDirective,
        CuiColorDirective,
    ],
    exports: [
        CuiBackgroundColorDirective,
        CuiColorDirective,
    ],
    providers: [ ],
})
export class CuiDirectivesModule { }
