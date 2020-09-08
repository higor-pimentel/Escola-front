import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisciplinasComponent } from "./disciplinas.component";

export const disciplinasRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DisciplinasComponent,
        data: {
          title: "Lista de disciplinas",
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(disciplinasRoutes)],
})
export class DisciplinasRoutingModule {}
