import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './auth-routing';
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AuthRouting, ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { } 