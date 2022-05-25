
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QsnComponent } from './qsn/qsn.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { SpaceclientComponent } from './spaceclient/spaceclient.component';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,

    ConnexionComponent,
    SpaceclientComponent,

    QsnComponent,
    ConnexionComponent
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
export class AppModule { }
