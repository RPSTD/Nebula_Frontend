import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NavbarComponent } from './pages/main-layout/navbar/navbar.component';
import { FooterComponent } from './pages/main-layout/footer/footer.component';
import { CoverComponent } from './pages/landing-page/cover/cover.component';
import { AvailableStoreComponent } from './pages/landing-page/available-store/available-store.component';
import { OffersComponent } from './pages/landing-page/offers/offers.component';
import { ComponentsComponent } from './pages/landing-page/components/components.component';
import { ReviewsComponent } from './pages/landing-page/reviews/reviews.component';
import {HttpClientModule} from "@angular/common/http";
import { CommonComponentComponent } from './pages/component-page/common-component/common-component.component';
import { VideoCanvasComponent } from './pages/about-us-page/video-canvas/video-canvas.component';
import { OurTeamComponent } from './pages/about-us-page/our-team/our-team.component';
import { ComponentDetailsComponent } from './pages/component-page/component-details/component-details.component';
import { ReviewComponent } from './pages/component-page/component-details/review/review.component';
import { DetailsComponent } from './pages/component-page/component-details/details/details.component';
import { DevolopmentComponent } from './pages/component-page/component-details/devolopment/devolopment.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ComponentPageComponent,
    ContactUsPageComponent,
    AboutUsPageComponent,
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    CoverComponent,
    AvailableStoreComponent,
    OffersComponent,
    ComponentsComponent,
    ReviewsComponent,
    CommonComponentComponent,
    VideoCanvasComponent,
    OurTeamComponent,
    ComponentDetailsComponent,
    ReviewComponent,
    DetailsComponent,
    DevolopmentComponent
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
