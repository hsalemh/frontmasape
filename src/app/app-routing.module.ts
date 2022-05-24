import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QsnComponent } from './qsn/qsn.component';

const routes: Routes = [

  {path: 'qsn' , component : QsnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
