import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';


import { QsnComponent } from './qsn/qsn.component';

const routes: Routes = [

  {path: 'qsn' , component : QsnComponent},
  {path: 'connexion', component : ConnexionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
