import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './app.component.scss';
//import { AppRoutingModule } from './app-routing.module';//
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ParentChildComponent } from './parent-child/parent-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
