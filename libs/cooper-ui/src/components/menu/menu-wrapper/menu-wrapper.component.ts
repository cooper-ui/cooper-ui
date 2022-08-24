import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-menu-wrapper',
    templateUrl: './menu-wrapper.component.html',
    styleUrls: [ './menu-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiMenuWrapperComponent {

}
