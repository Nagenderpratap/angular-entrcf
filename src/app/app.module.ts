import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import  { TopBarComponent } from './shared-routes/top-bar/top-bar.component';
import { HomeComponent } from './routes/home/home.component';

//import { AuthModule } from './routes/auth-module/auth-module.module';
import { AuthGuard } from './core/auth.guard';


@NgModule({
  imports:      [ BrowserModule, FormsModule , AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, TopBarComponent , HomeComponent],
  bootstrap:    [ AppComponent ],
  providers : [AuthGuard]
})
export class AppModule { }
