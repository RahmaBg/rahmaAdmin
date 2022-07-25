import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.css']
})
export class UpdateCommandeComponent implements OnInit {

  livraison!: Commande;
  _id !: string;
  constructor(private route: ActivatedRoute, private updatelivService:CommandeService) { }

  ngOnInit(): void {
   
   
      
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._id = params._id;
     // this.adminCreateurId = "";
      console.log("this._id = " + this._id); // price
     // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
    }

    
  );


    this.updatelivService.get(this._id).subscribe(
    (data:Commande)=> this.livraison=data
  );
  
}
selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
    console.log(value);
	}
  updateLivraison(){
    //
 //   this.book.nbrLike=0;
 this.livraison.isActive = this.selectedTeam;
    this.updatelivService.updateCommande(this.livraison).subscribe();
    //notify

  }
}
