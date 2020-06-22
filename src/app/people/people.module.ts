import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormModule } from './form/form.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormModule
    
  ]
})
export class PeopleModule { }
