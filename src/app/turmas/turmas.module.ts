import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { TurmasRoutingModule } from "./turmas.routing.module";
import { TurmasListModule } from "./turmas-list/turmas-list.module";
import { TurmasFormModule } from "./turmas-form/turmas-form.module";
import { TurmasDaoService } from "../services/turmas/turmasDao.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TurmasListModule,
    TurmasFormModule,
    RouterModule,
    TurmasRoutingModule,
  ],
  providers: [TurmasDaoService],
})
export class TurmasModule {}
