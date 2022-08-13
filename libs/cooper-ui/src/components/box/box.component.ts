import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperBoxComponent {
  
}
