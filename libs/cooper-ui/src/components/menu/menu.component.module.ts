import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
// --------------------------------------------------------
import { CuiMenuComponent } from './menu.component';
export { CuiMenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiMenuComponent,
    ],
    declarations: [
        CuiMenuComponent,
    ],
    providers: [],
})
export class CuiMenuComponentModule { }
