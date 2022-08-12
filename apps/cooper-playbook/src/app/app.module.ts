import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CooperColorPaletteComponentModule } from 'cooper-ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CooperColorPaletteComponentModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
