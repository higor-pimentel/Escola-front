import { NgModule } from '@angular/core';
import { TurmasListComponent } from './turmas-list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TurmasRoutingModule } from '../turmas.routing.module';

@NgModule({
    declarations: [TurmasListComponent],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class TurmasListModule {}