import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'cui-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiRootComponent {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    @Input('darkModeEnabled') set setDarkModeEnabled(value: boolean) {
        this.darkModeEnabled = value;
        this.setDarkModeClass();
    }

    private darkModeEnabled = true;

    private setDarkModeClass(): void {
        if (this.darkModeEnabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'darkModeEnabled');
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'darkModeEnabled');
        }
    }

}
