import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CuiColorPalettesComponentModule, CuiRootComponentModule } from 'cooper-ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        CuiColorPalettesComponentModule,
        CuiRootComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
