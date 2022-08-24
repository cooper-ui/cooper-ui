import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
// --------------------------------------------------------
import { CuiColorPalettesComponentModule,
         CuiMenuComponentModule,
         CuiRootComponentModule } from 'cooper-ui';
// --------------------------------------------------------
import { AppComponent }           from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CuiColorPalettesComponentModule,
        CuiMenuComponentModule,
        CuiRootComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
