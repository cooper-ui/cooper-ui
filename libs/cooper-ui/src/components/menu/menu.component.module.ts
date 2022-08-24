import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
// --------------------------------------------------------
import { CuiMenuComponent }        from './menu.component';
import { CuiMenuItemComponent }    from './menu-item/menu-item.component';
import { CuiMenuRouterComponent }  from './menu-router/menu-router.component';
import { CuiMenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';
// --------------------------------------------------------
export { CuiMenuComponent }        from './menu.component';
export { CuiMenuItemComponent }    from './menu-item/menu-item.component';
export { CuiMenuRouterComponent }  from './menu-router/menu-router.component';
export { CuiMenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiMenuComponent,
        CuiMenuItemComponent,
        CuiMenuRouterComponent,
        CuiMenuWrapperComponent,
    ],
    declarations: [
        CuiMenuComponent,
        CuiMenuItemComponent,
        CuiMenuRouterComponent,
        CuiMenuWrapperComponent,
    ],
    providers: [],
})
export class CuiMenuComponentModule { }
