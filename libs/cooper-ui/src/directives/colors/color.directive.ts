import { Directive,
         ElementRef,
         Input,
         OnInit,
         Renderer2 } from '@angular/core';
// --------------------------------------------------------
import { CuiColor }  from '../../shared';

@Directive({ selector: '[cui-color]' })
export class CuiColorDirective implements OnInit {

    @Input('cui-color') public color: CuiColor = 'primary-500';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', `var(--color-${ this.color })`);
    }

}
