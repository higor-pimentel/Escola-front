import { NgModule } from '@angular/core';
import { TurmasFormComponent } from './turmas-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[TurmasFormComponent],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class TurmasNewModule{}