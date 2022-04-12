import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  providers: [],
  // no need to place any providers due to the `providedIn` flag...
  bootstrap: [AppComponent],
})
export class AppModule {}
