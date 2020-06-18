import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';


import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { FormModule } from './people/form/form.module';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { PeopleModule } from './people/people.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    SharedModule,
    ErrorsModule,
    RouterModule.forRoot([])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
