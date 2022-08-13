import { CommonModule }                 from '@angular/common';
import { NgModule }                     from '@angular/core';
// --------------------------------------------------------
import { CooperDirectivesModule }       from '../../directives';
import { CooperBoxComponentModule }     from '../box/box.component.module';
// --------------------------------------------------------
import { CooperColorPalettesComponent } from './color-palettes.component';
import { CooperColorPaletteComponent }  from './color-palette/color-palette.component';

@NgModule({
    imports: [
        CommonModule,
        CooperDirectivesModule,
        CooperBoxComponentModule,
    ],
    declarations: [
        CooperColorPalettesComponent,
        CooperColorPaletteComponent,
    ],
    exports: [
        CooperColorPalettesComponent,
        CooperColorPaletteComponent,
    ],
    providers: [ ],
})
export class CooperColorPalettesComponentModule { }
