import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TurmasListComponent } from "./turmas-list/turmas-list.component";
import { TurmasListModule } from "./turmas-list/turmas-list.module";
import { TurmasFormComponent } from "./turmas-form/turmas-form.component";
import { TurmasFormModule } from "./turmas-form/turmas-form.module";

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
        path: "disciplinas",
        component: TurmasFormComponent,
        data: { title: "Nova Turma" },
      },
      {
        path: "new",
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
    TurmasFormModule,
  ],
  exports: [RouterModule],
})
export class TurmasRoutingModule {}
