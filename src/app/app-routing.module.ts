import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {resourcePath} from "./dto/resource-path";
import {ComponentPageComponent} from "./pages/component-page/component-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ContactUsPageComponent} from "./pages/contact-us-page/contact-us-page.component";
import {ComponentDetailsComponent} from "./pages/component-page/component-details/component-details.component";

const routes: Routes = [
  { path: 'nebula', component: MainLayoutComponent, children:[
      {
        path:'',
        component: LandingPageComponent
      },
      {
        path:'component',
        component:ComponentPageComponent
      },
      {
        path:'about-us',
        component:AboutUsPageComponent
      },
      {
        path:'contact-us',
        component:ContactUsPageComponent
      },
      {
        path: 'component/:componentId',
        component:ComponentDetailsComponent
      },
      { path: '**', redirectTo: resourcePath.MAIN_MENU, pathMatch: 'full' }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
