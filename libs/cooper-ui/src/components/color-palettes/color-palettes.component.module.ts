import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
// --------------------------------------------------------
import { CuiDirectivesModule }       from '../../directives';
// --------------------------------------------------------
import { CuiColorPalettesComponent } from './color-palettes.component';
import { CuiColorPaletteComponent }  from './color-palette/color-palette.component';
// --------------------------------------------------------
export { CuiColorPalettesComponent } from './color-palettes.component';
export { CuiColorPaletteComponent }  from './color-palette/color-palette.component';

@NgModule({
    imports: [
        CommonModule,
        CuiDirectivesModule,
    ],
    declarations: [
        CuiColorPalettesComponent,
        CuiColorPaletteComponent,
    ],
    exports: [
        CuiColorPalettesComponent,
        CuiColorPaletteComponent,
    ],
    providers: [ ],
})
export class CuiColorPalettesComponentModule { }
