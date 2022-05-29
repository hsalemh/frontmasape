import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AideComponent } from './aide/aide.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { NosvetementComponent } from './nosvetement/nosvetement.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';
import { QsnComponent } from './qsn/qsn.component';
import {SpaceclientComponent} from './spaceclient/spaceclient.component';

const routes: Routes = [

  {path: 'qsn', component : QsnComponent},
  {path: 'connexion', component : ConnexionComponent},
  {path: 'nosvetement', component : NosvetementComponent},
  {path:'spaceclient', component : SpaceclientComponent},
  {path:'home', component : HomeComponent},
  {path:'aide', component : AideComponent},
  {path:'panier',component: PanierComponent},
  {path:'produits',component: ProduitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
