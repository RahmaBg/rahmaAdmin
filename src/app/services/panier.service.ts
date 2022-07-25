import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { livUrl, panierUrl, prodUrl } from 'api';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private http: HttpClient) { }
     
   //get Commande
   getList(){
    console.log("test OK");
    return this.http.get<Panier[]>(panierUrl);
    console.log( this.http.get<Panier[]>(panierUrl));
  } 
  

  //add a new commande

  addCommande(commande : Panier){
    return this.http.post(panierUrl+'add/'+commande.produit,commande);
  }
 
  //delete

  deleteCommande(id:string){
    return this.http.delete(panierUrl+"delete/"+id);
  }
  //get by id panier
  get(id : string){
    return this.http.get<Panier[]>(panierUrl+'get/'+id);
  } 
  //update

  updateCommande(commande:Panier){
    return this.http.put(panierUrl+commande._id,commande);
  }}