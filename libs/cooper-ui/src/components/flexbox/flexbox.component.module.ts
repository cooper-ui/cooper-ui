import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
// --------------------------------------------------------
import { CuiFlexboxComponent } from './flexbox.component';
// --------------------------------------------------------
export { CuiFlexboxComponent } from './flexbox.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiFlexboxComponent,
    ],
    declarations: [
        CuiFlexboxComponent,
    ],
    providers: [ ],
})
export class CuiFlexboxComponentModule { }
