import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperColorPaletteComponent {

    @Input() public name = '';

}
