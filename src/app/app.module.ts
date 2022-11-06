import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
// import { LoginPageComponent } from './login-page/repeatbg.component';
import { HomeComponent } from './home/home.component';
import { RepeatBgComponent } from './repeat-bg/repeat-bg.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { SuperAdminsComponent } from './super-admins/super-admins.component';
import { AdminsComponent } from './admins/admins.component';
import { InvisionService } from './invision.service';
import { HttpClientModule } from '@angular/common/http';
import { PptComponent } from './ppt/ppt.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginPageComponent,
    HomeComponent,
    RepeatBgComponent,
    LoginpageComponent,
    AlertBoxComponent,
    ChangePwdComponent,
    SuperAdminsComponent,
    AdminsComponent,
    PptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InvisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
