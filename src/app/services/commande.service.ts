import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   

import { Commande } from './../models/commande';
import { Product } from './../models/product';
import { cartUrl, prodUrl,panierUrl } from 'api';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
     
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private http: HttpClient) { }
     
   //get Commande
   getList(){
    console.log("test OK");
    return this.http.get<Commande[]>(cartUrl);
    console.log(cartUrl);
  } 
  //get Commande
  getListProd(){
    return this.http.get<Product[]>(prodUrl);
  } 

  //add a new commande

  addCommande(commande : Commande){
    return this.http.post(cartUrl+commande.panier,commande);
  }
 
  //delete

  deleteCommande(id:number){
    return this.http.delete(cartUrl+"delete/"+id);
  }
  //get by id panier
  get(id : string){
    return this.http.get<Commande>(cartUrl+'get/'+id);
  } 
  //update

  updateCommande(commande:Commande){
    return this.http.put(cartUrl+'update/'+commande._id,commande);
  }}
