import { ChangeDetectionStrategy,
         Component,
         Input }                  from '@angular/core';
// --------------------------------------------------------
import { CuiColor,
         CuiColorBase }           from '../../../shared';

@Component({
    selector: 'cui-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperColorPaletteComponent {

    @Input() name: CuiColorBase = 'primary';

    public get color50(): CuiColor {
        return <CuiColor>(this.name + '-50');
    }

    public get color100(): CuiColor {
        return <CuiColor>(this.name + '-100');
    }

    public get color200(): CuiColor {
        return <CuiColor>(this.name + '-200');
    }

    public get color300(): CuiColor {
        return <CuiColor>(this.name + '-300');
    }

    public get color400(): CuiColor {
        return <CuiColor>(this.name + '-400');
    }

    public get color500(): CuiColor {
        return <CuiColor>(this.name + '-500');
    }

    public get color600(): CuiColor {
        return <CuiColor>(this.name + '-600');
    }

    public get color700(): CuiColor {
        return <CuiColor>(this.name + '-700');
    }

    public get color800(): CuiColor {
        return <CuiColor>(this.name + '-800');
    }

    public get color900(): CuiColor {
        return <CuiColor>(this.name + '-900');
    }

}
