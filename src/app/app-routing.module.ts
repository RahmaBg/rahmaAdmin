import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';
import { FactureComponent } from './facture/facture.component';
import { UpdateLivraisonComponent } from './update-livraison/update-livraison.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path: 'livreur', component: LivreurComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'livraison/updateliv', component: UpdateLivraisonComponent},
  {path: 'commande/updatecmd', component: UpdateCommandeComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
