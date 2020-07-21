import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  {
    path:"auth",
    loadChildren:"./auth/auth.module#AuthModule"
  },
  {
    path:"user",
    loadChildren:"./user/user.module#UserModule",
    canActivateChild:[AuthGaurdService],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
