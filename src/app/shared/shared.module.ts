import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [ WidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ],
  exports: [
    CommonModule,
    PoModule,
    PoTemplatesModule,
    FormsModule,
    WidgetComponent
  ]
})
export class SharedModule { }