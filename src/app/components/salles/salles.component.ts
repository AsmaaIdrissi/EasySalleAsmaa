import { Component, OnInit } from '@angular/core';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';
import { Global } from '../../services/global';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss'],
  providers: [SalleService]
})
export class SallesComponent implements OnInit {

 public salles: Salle[];
    public url:string;
  
    constructor(
      private _salleService: SalleService
    ) {
      this.url=Global.url;
    }
  
    ngOnInit() {
      this.getSalles();
    }
  
    getSalles(){
      this._salleService.getSalles().subscribe(response=>{
        if(response.salles){
          this.salles=response.salles;
        }
            console.log(response);
      }, 
      error=>{
        console.log(<any>error);
      }
      );
  
    }

}
