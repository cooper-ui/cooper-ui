import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
// --------------------------------------------------------
import { CooperDirectivesModule }      from '../../directives';
import { CooperBoxComponentModule }    from './../box/box.component.module';
// --------------------------------------------------------
import { CooperColorPaletteComponent } from './color-palette.component';

@NgModule({
    imports: [
        CommonModule,
        CooperDirectivesModule,
        CooperBoxComponentModule,
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
