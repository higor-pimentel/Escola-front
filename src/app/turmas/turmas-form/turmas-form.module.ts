import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

import { TurmasFormComponent } from "./turmas-form.component";

@NgModule({
  declarations: [TurmasFormComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class TurmasFormModule {}
