import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
// --------------------------------------------------------
import { CuiRootComponent } from './root.component';
// --------------------------------------------------------
export { CuiRootComponent } from './root.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CuiRootComponent,
    ],
    exports: [
        CuiRootComponent,
    ],
    providers: [ ],
})
export class CuiRootComponentModule { }
