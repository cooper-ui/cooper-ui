import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiRootComponent { }
