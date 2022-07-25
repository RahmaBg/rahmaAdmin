import { Component, OnInit } from '@angular/core';
import { Livraison } from '../models/livraison';
import { LivraisonService } from '../services/livraison.service';
import * as html2pdf from 'html2pdf.js'
import { Panier } from '../models/panier';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  template : '				<app-update-livraison *ngFor="let cmd of list" [livr]="cmd" ></app-update-livraison> ',

  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
   livr!: Livraison;
isClos  = Boolean ;
isEncours = Boolean;
isPret = Boolean;

 
   constructor(private liv : LivraisonService) { }
   list! : Livraison[] ;
   selectedTeam = ' ';

   ngOnInit(): void {
    this.checkStatus(this.selectedTeam);
     this.liv.getList().subscribe(
       (data : Livraison[] )=> this.list= data,
       ()=>{},
       ()=> {}
       
     );
     this.livr = new Livraison();
     
   }
  
  
   download(){
     var element = document.getElementById('orders-table');
 var opt = {
   margin:       1,
   filename:     'listeDesLivraisons.pdf',
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
   checkStatus(value:string) : void {
    this.selectedTeam = value;
    console.log(value);
   }
}
