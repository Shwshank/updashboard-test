import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/common';

import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { HomeComponent } from './home/home.component';
import { MapTestComponent } from './map-test/map-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapTestComponent
  ],
  imports: [

    BrowserModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
