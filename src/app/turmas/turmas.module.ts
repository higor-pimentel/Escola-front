import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { TurmasRoutingModule } from './turmas.routing.module';
import { TurmasListComponent } from './turmas-list/turmas-list.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        TurmasRoutingModule
    ]
})
export class TurmasModule {

}