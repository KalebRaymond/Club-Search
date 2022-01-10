import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ClubsContainerComponent } from './clubs-container/clubs-container.component';
import { ClubCardComponent } from './club-card/club-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPanelComponent,
    ClubsContainerComponent,
    ClubCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
