import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
// --------------------------------------------------------
import { CuiBoxComponent } from './box.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CuiBoxComponent
    ],
    exports: [
        CuiBoxComponent,
    ],
    providers: [ ],
})
export class CuiBoxComponentModule { }
