import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QsnComponent} from './qsn/qsn.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {HttpClientModule} from '@angular/common/http';
import {NosvetementComponent} from './nosvetement/nosvetement.component'
import {SpaceclientComponent} from './spaceclient/spaceclient.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AideComponent } from './aide/aide.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SpaceclientComponent,
    QsnComponent,
    NosvetementComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AideComponent,
    PanierComponent,

    ProduitsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
