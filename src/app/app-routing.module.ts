import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { NosvetementComponent } from './nosvetement/nosvetement.component';
import { QsnComponent } from './qsn/qsn.component';
import {SpaceclientComponent} from './spaceclient/spaceclient.component';

const routes: Routes = [

  {path: 'qsn' , component : QsnComponent},
  {path: 'connexion', component : ConnexionComponent},
  {path: 'nosvetement', component : NosvetementComponent},
  {path:'spaceclient', component:SpaceclientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
