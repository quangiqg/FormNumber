// expression.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpressionsComponent } from './expressions/expressions.component';

@NgModule({
  declarations: [
    ExpressionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExpressionsComponent
  ]
})
export class ExpressionModule { }
