import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PoModule } from "@po-ui/ng-components";
import { PoStepperModule } from "@po-ui/ng-components";

import { AppComponent } from "./app.component";
import { ErrorsModule } from "./errors/errors.module";
import { FormModule } from "./people/form/form.module";
import { AppRoutingModule } from "./app.routing.module";
import { SharedModule } from "./shared/shared.module";
import { PeopleModule } from "./people/people.module";
import { HomeModule } from "./home/home.module";
import { TurmasModule } from "./turmas/turmas.module";
import { WebBackendApiModule } from "web-backend-api";
import { AppWebBackendApiModule } from "./backend/app-web-backend-api.module";
import { DisciplinasModule } from "./disciplinas/disciplinas.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    SharedModule,
    ErrorsModule,
    HomeModule,
    TurmasModule,
    DisciplinasModule,
    PeopleModule,
    PoModule,
    PoStepperModule,
    WebBackendApiModule.forRoot(),
    AppWebBackendApiModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
