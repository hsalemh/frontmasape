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


@NgModule({
  declarations: [
    AppComponent,

    ConnexionComponent,
    SpaceclientComponent,
    QsnComponent,
    ConnexionComponent,
    NosvetementComponent,
    HeaderComponent,
    FooterComponent,
// 7c9a1b3f8cfcd06c8d974c78df8cd72d9e20ac1d

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
