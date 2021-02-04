import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {SharedComponent} from "./shared.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import { LoginServiceShared } from "./Services/LoginServiceShared";

@NgModule({
  declarations: [SharedComponent, LoginComponent, RegisterComponent],
  exports: [SharedComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  providers: [
    LoginServiceShared,
  ]
})
export class SharedModule { }
