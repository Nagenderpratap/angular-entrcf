import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AuthModule } from './routes/auth-module/auth-module.module';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path : "" , redirectTo : 'home', pathMatch :'full'},
 { path: 'home', component: HomeComponent },
  
  {
    path : 'login',
    canActivate : [AuthGuard],
    loadChildren: () =>  import ('./routes/auth-module/auth-module.module').then( m => m.AuthModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }