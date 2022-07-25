import { Component, OnInit,ViewChild } from '@angular/core';
import { Commande } from '../models/commande';
import { CommandeService } from './../services/commande.service';
import * as html2pdf from 'html2pdf.js'
import { Panier } from '../models/panier';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  l: any;

 prix :0 | undefined
  constructor(private cmd : CommandeService) { }
  list! : Commande[] ;
  panier !: any;
  qte  = 0;
     selectedTeam = ' ';

  ngOnInit(): void {
      this.checkStatus(this.selectedTeam);

    this.cmd.getList().subscribe(
      (data : Commande[] )=> this.list= data,
      ()=>{},
      ()=> {}
      
    );
    for ( const l in this.list){
    this.get(this.l.panier)
     this.prix = this.l.prixTotal;
    }
    console.log(this.prix);
  }
 get(id :string){
  this.cmd.get(id).subscribe(
    (data : Commande )=> this.panier= data,
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
  filename:     'listeDesCommandes.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
 
// New Promise-based usage:
html2pdf().from(element).set(opt).save();
  }
  delete(id: number ): void{
    this.cmd.deleteCommande(id).subscribe();
    this.reload ();
  
  }
  reload () { this.ngOnInit(); }
checkStatus(value:string) : void {
    this.selectedTeam = value;
    console.log(value);
   }
}
