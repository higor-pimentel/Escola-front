import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

import { TurmasListComponent } from "./turmas-list.component";

@NgModule({
  declarations: [TurmasListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class TurmasListModule {}
