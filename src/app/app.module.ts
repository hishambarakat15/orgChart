import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {OrganizationChartModule} from 'primeng/organizationchart';
import {CardModule} from 'primeng/card';

const uxModule = [
  CardModule,
  OrganizationChartModule
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...uxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
