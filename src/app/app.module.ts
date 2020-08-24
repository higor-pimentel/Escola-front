import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PoModule } from "@po-ui/ng-components";

import { AppComponent } from "./app.component";
import { ErrorsModule } from "./errors/errors.module";
import { FormModule } from "./people/form/form.module";
import { AppRoutingModule } from "./app.routing.module";
import { SharedModule } from "./shared/shared.module";
import { PeopleModule } from "./people/people.module";
import { HomeModule } from "./home/home.module";
import { TurmasModule } from "./turmas/turmas.module";

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
    PeopleModule,
    PoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
