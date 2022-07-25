import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livraison } from '../models/livraison';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-update-livraison',
  templateUrl: './update-livraison.component.html',
  styleUrls: ['./update-livraison.component.css']
})
export class UpdateLivraisonComponent implements OnInit {
  livraison!: Livraison;
  _id !: string;
  constructor(private route: ActivatedRoute, private updatelivService:LivraisonService) { }

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
    (data:Livraison)=> this.livraison=data
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
 this.livraison.isValid = this.selectedTeam;
    this.updatelivService.updateCommande(this.livraison).subscribe();
    //notify

  }
}
