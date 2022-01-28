import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClubCardComponent } from './club-card/club-card.component';
import { ClubInfoPanelComponent } from './club-info-panel/club-info-panel.component';
import { ClubsContainerComponent } from './clubs-container/clubs-container.component';
import { ClubSearchEffects } from './store/club-search.effects';
import { ClubSearchService } from './services/club-search.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { reducer } from './store/club-search.reducer';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubCardComponent,
    ClubInfoPanelComponent,
    ClubsContainerComponent,
    NavbarComponent,
    SearchPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([ClubSearchEffects]),
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('club-search', reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
