import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TurmasListComponent } from "./turmas-list/turmas-list.component";
import { TurmasListModule } from "./turmas-list/turmas-list.module";
import { TurmasFormComponent } from "./turmas-form/turmas-form.component";
import { TurmasNewModule } from "./turmas-form/turmas-form.module";

export const turmasRoutes: Routes = [
  {
    path: "",

    children: [
      {
        path: "",
        component: TurmasListComponent,
        data: {
          title: "Lista de turmas",
        },
      },
      {
        path: "new/:turmaId",
        component: TurmasFormComponent,
        data: { title: "Nova Turma" },
      },
      {
        path: "edit/:turmaId",
        component: TurmasFormComponent,
        data: { title: "Editar Turma" },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(turmasRoutes),
    TurmasListModule,
    TurmasNewModule,
  ],
  exports: [RouterModule],
})
export class TurmasRoutingModule {}
