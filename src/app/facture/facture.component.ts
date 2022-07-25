import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js'
import { Facture } from '../models/facture';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  l: any;

  prix :0 | undefined
   constructor(private liv : FactureService) { }
   list! : Facture[] ;
   panier !: any;
   qte  = 0;
    i = document.getElementById("livreur");
    m  = document.getElementById("membre");
   ngOnInit(): void {
     this.liv.getList().subscribe(
       (data : Facture[] )=> this.list= data,
       ()=>{},
       ()=> {}
       
     );
     
     
     console.log(this.prix);
   }
  
   
  
   download(){
     var element = document.getElementById('orders-table');
 var opt = {
   margin:       1,
   filename:     'listeDesFactures.pdf',
   image:        { type: 'jpeg', quality: 0.98 },
   html2canvas:  { scale: 2 },
   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
 };
  
 // New Promise-based usage:
 html2pdf().from(element).set(opt).save();
   }
   delete(id: string ): void{
     this.liv.deleteFacture(id).subscribe();
     this.reload ();
   
   }
   reload () { this.ngOnInit(); }

}
