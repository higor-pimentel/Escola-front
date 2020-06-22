import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmasListComponent } from './turmas-list/turmas-list.component';
import { TurmasListModule } from './turmas-list/turmas-list.module';
import { TurmasFormComponent } from './turmas-form/turmas-form.component';
import { TurmasNewModule } from './turmas-form/turmas-form.module';

export const turmasRoutes: Routes = [ 
    { path:'', component: TurmasListComponent},
    {path: 'new', component: TurmasFormComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forChild(turmasRoutes),
        TurmasListModule,
        TurmasNewModule
      ],
      exports: [ RouterModule ]
})
export class TurmasRoutingModule { }