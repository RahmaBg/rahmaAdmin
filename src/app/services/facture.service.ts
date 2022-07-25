import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { factUrl, prodUrl } from 'api';
import { Facture } from '../models/facture';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

    
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private http: HttpClient) { }
     
   //get Commande
   getList(){
    return this.http.get<Facture[]>(factUrl);
  } 
  //get Commande
  getListProd(){
    return this.http.get<Product[]>(prodUrl);
  } 

  //add a new commande

  addFacture(commande : Facture){
    return this.http.post(factUrl+"add/"+commande.membre+"/"+commande.livreur+"/"+commande.commande,commande);
  }
 
  //delete

  deleteFacture(id:string){
    return this.http.delete(factUrl+'delete/'+id);
  }
  
  //update

  updateFacture(commande:Facture){
    return this.http.put(factUrl+'update/'+commande._id,commande);
  }}
