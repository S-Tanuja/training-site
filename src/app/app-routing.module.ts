import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { AppComponent } from './app.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RepeatBgComponent } from './repeat-bg/repeat-bg.component';
import { SuperAdminsComponent } from './super-admins/super-admins.component';
// import { LoginPageComponent } from './login-page/repeatbg.component';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'repeat-bg',component:RepeatBgComponent},
  {path:'home',component:HomeComponent},
  {path:'changepwd',component:ChangePwdComponent},
  {path:'alertbox',component:AlertBoxComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'admins',component:AdminsComponent},
  {path:'superadmins',component:SuperAdminsComponent},
  // {path:'',redirectTo:'/loginpage',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
