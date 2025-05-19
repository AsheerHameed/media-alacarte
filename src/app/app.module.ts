import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesCardComponent } from './shared/components/services-card/services-card.component';
import { SolutionCardComponent } from './shared/components/solution-card/solution-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { StatsComponent } from './components/stats/stats.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesCardComponent,
    SolutionCardComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    SolutionsComponent,
    StatsComponent,
    FooterComponent,
    ServicesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
