import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {SampleServiceService} from './sample-service.service';
import {SampleService2Service} from './sample-service2.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SampleServiceService,SampleService2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
