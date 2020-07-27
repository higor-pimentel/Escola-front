import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./home.component";
import { SingInComponent } from "./singin/singin.component";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [HomeComponent, SingInComponent, SignupComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
