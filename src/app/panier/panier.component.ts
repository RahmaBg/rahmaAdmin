import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js'
import { Panier } from '../models/panier';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  l: any;

  prix :0 | undefined
   constructor(private liv : PanierService) { }
   list! : Panier[] ;
   panier !: any;
   qte  = 0;
   ngOnInit(): void {
     this.liv.getList().subscribe(
       (data : Panier[] )=> this.list= data,
       ()=>{},
       ()=> {}
       
     );
     console.log(this.list);
     for ( const l in this.list){
     this.get(this.l.panier)
      this.prix = this.l.prixTotal;
     }
     console.log(this.prix);
   }
  get(id :string){
   this.liv.get(id).subscribe(
     (data : Panier[] )=> this.panier= data,
     ()=>{},
     ()=> {},
   ); 
   console.log(this.prix)
 
   console.log(this.panier);
  }
   
  
   download(){
     var element = document.getElementById('orders-table');
 var opt = {
   margin:       1,
   filename:     'listeDesPaniers.pdf',
   image:        { type: 'jpeg', quality: 0.98 },
   html2canvas:  { scale: 2 },
   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
 };
  
 // New Promise-based usage:
 html2pdf().from(element).set(opt).save();
   }
   delete(id: string ): void{
     this.liv.deleteCommande(id).subscribe();
     this.reload ();
   
   }
   reload () { this.ngOnInit(); }

}


