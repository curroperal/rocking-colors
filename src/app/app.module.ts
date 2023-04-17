import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ServiceComponent } from './pages/service/service.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CookiesComponent } from './shared/cookies/cookies.component';
import { PrivacyComponent } from './pages/policy/privacy/privacy.component';
import { LegalComponent } from './pages/policy/legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    ServiceComponent,
    BlogComponent,
    CookiesComponent,
    PrivacyComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
