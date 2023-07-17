import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamPageComponent } from './widgets/team-page/team-page/team-page.component';
import { CtaComponent } from './widgets/cta/cta/cta.component';
import { AnimatedCardsComponent } from './widgets/cards/animated-cards/animated-cards.component';
import { PosterCardComponent } from './widgets/cards/poster-card/poster-card.component';
import { ErrorPageComponent } from './widgets/error-page/error-page/error-page.component';
import { PortfolioComponent } from './widgets/portfolio/portfolio.component';
import { ContactUsComponent } from './widgets/contact-us/contact-us.component';
import { BarComponent } from './widgets/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamPageComponent,
    CtaComponent,
    AnimatedCardsComponent,
    PosterCardComponent,
    ErrorPageComponent,
    PortfolioComponent,
    ContactUsComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
