import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { FormComponent } from "./people/form/form.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../app/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "turmas",
    loadChildren: () =>
      import("../app/turmas/turmas.module").then((m) => m.TurmasModule),
  },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
