import { NgModule } from "@angular/core";
import { DisciplinasComponent } from "./disciplinas.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { DisciplinasRoutingModule } from "./disciplinas.routing.module";

@NgModule({
  declarations: [DisciplinasComponent],
  imports: [CommonModule, SharedModule, RouterModule, DisciplinasRoutingModule],
})
export class DisciplinasModule {}
