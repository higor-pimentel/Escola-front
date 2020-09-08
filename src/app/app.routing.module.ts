import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { NotFoundComponent } from "./errors/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule",
  },
  {
    path: "turmas",
    loadChildren: "./turmas/turmas.module#TurmasModule",
  },
  {
    path: "disciplinas",
    loadChildren: "./disciplinas/disciplinas.module#DisciplinasModule",
  },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
