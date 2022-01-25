import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ClubsContainerComponent } from './clubs-container/clubs-container.component';
import { ClubCardComponent } from './club-card/club-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClubInfoPanelComponent } from './club-info-panel/club-info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPanelComponent,
    ClubsContainerComponent,
    ClubCardComponent,
    ClubInfoPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
