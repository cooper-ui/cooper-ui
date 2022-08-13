import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CooperColorPalettesComponentModule, CooperBoxComponentModule } from 'cooper-ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        CooperColorPalettesComponentModule,
        CooperBoxComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
