import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/section/home/home.component';
import { AboutComponent } from './components/section/about/about.component';
import { ServicesComponent } from './components/section/services/services.component';
import { PortfolioComponent } from './components/section/portfolio/portfolio.component';
import { ToolsComponent } from './components/section/tools/tools.component';
import { ContactComponent } from './components/section/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


//INICIO Service
import {MenuService} from "./menu.service";

//FIN Service

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ToolsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
