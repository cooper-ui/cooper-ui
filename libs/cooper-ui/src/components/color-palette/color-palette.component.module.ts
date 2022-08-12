import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
// --------------------------------------------------------
import { CooperDirectivesModule }      from '../../directives';
// --------------------------------------------------------
import { CooperColorPaletteComponent } from './color-palette.component';

@NgModule({
    imports: [
        CommonModule,
        CooperDirectivesModule,
    ],
    declarations: [
        CooperColorPaletteComponent,
    ],
    exports: [
        CooperColorPaletteComponent,
    ],
    providers: [ ],
})
export class CooperColorPaletteComponentModule { }
