// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressionsComponent } from './expression/expressions/expressions.component';

const routes: Routes = [
  { path: '', component: ExpressionsComponent },
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
