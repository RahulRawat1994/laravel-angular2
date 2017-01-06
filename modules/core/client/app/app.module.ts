import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent }  from './components/user.component';
import { AppComponent }  from './components/app.component';
import {routing} from './app.routes'
@NgModule({
  imports:      [ 
                  BrowserModule,
                  routing 
                ],
  declarations: [ AppComponent,
                  UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
