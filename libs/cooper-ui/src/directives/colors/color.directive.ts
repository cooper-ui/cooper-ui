import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[cui-color]' })
export class CooperColorDirective implements OnInit {

    @Input('cui-color') public color = 'primary-500';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', `var(--color-${ this.color })`);
    }

}
