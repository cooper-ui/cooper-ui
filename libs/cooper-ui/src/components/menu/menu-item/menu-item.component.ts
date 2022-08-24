import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiMenuItemComponent {

}
