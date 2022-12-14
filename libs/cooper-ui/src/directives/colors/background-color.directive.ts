import { Directive,
         ElementRef,
         Input,
         OnInit,
         Renderer2 } from '@angular/core';
// --------------------------------------------------------
import { CuiColor }  from './../../shared';

@Directive({ selector: '[cui-bg-color]' })
export class CuiBackgroundColorDirective implements OnInit {

    @Input('cui-bg-color') public color: CuiColor = 'primary-500';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', `var(--color-${ this.color })`);
    }

}
