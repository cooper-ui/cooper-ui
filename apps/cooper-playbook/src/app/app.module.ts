import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CooperColorPaletteComponentModule, CooperBoxComponentModule } from 'cooper-ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        CooperColorPaletteComponentModule,
        CooperBoxComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
