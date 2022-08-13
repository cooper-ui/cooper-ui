import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
// --------------------------------------------------------
import { CooperBoxComponent } from './box.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CooperBoxComponent
    ],
    exports: [
        CooperBoxComponent,
    ],
    providers: [ ],
})
export class CooperBoxComponentModule { }
