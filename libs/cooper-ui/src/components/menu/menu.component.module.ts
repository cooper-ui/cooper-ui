import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
// --------------------------------------------------------
import { CuiMenuComponent }        from './menu.component';
import { CuiMenuRouterComponent }  from './menu-router/menu-router.component';
import { CuiMenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';
// --------------------------------------------------------
export { CuiMenuComponent }        from './menu.component';
export { CuiMenuRouterComponent }  from './menu-router/menu-router.component';
export { CuiMenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiMenuComponent,
        CuiMenuRouterComponent,
        CuiMenuWrapperComponent,
    ],
    declarations: [
        CuiMenuComponent,
        CuiMenuRouterComponent,
        CuiMenuWrapperComponent,
    ],
    providers: [],
})
export class CuiMenuComponentModule { }
