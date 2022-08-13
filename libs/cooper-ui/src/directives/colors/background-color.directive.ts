import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[cui-bg-color]' })
export class CooperBackgroundColorDirective implements OnInit {

    @Input('cui-bg-color') public color = 'primary-500';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', `var(--color-${ this.color })`);
    }

}
