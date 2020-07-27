import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SingInComponent } from "./singin/singin.component";
import { SignupComponent } from "./signup/signup.component";

export const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: SingInComponent,
        data: {
          title: "Sign in",
        },
      },
      {
        path: "signup",
        component: SignupComponent,
        data: { title: "Sign up" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
