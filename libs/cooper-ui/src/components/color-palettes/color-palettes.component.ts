import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cui-color-palettes',
    templateUrl: './color-palettes.component.html',
    styleUrls: ['./color-palettes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperColorPalettesComponent { }
