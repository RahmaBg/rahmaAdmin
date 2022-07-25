import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LivreurComponent } from './livreur/livreur.component';
import { PanierComponent } from './panier/panier.component';
import { FactureComponent } from './facture/facture.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { CommandeComponent } from './commande/commande.component';
import { FormsModule } from '@angular/forms';
import { UpdateLivraisonComponent } from './update-livraison/update-livraison.component';
import { UpdatePanierComponent } from './update-panier/update-panier.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SideBarComponent,
    LivreurComponent,
    PanierComponent,
    FactureComponent,
    LivraisonComponent,
    CommandeComponent,
    UpdateLivraisonComponent,
    UpdatePanierComponent,
    UpdateCommandeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    FormsModule,   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, FooterComponent]
})
export class AppModule { }
