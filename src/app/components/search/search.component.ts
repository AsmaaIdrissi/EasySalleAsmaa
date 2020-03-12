import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';
import { SallesComponent } from '../salles/salles.component';
import { Global } from '../../services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[SalleService]
})
export class SearchComponent implements OnInit {

  public salle:Salle;
  public title:String;
  public salles$:Salle[];
  public search:String;
  public url:String;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _salleService: SalleService
  ) { 
    this.title="Liste de Salles trouvés";
    this.url=Global.url;
  }

  ngOnInit() {
   
    this._route.params.subscribe(params=>{
    
      var search=params['search'];
      this.search=search;
      alert(search);
     
      this._salleService.search(search).subscribe(response=>{
          this.salles$=response;
       console.log(this.salles$);
      },
      error=>{
      });
     
      },error=>{ console.log(<any>error);
       
      
      

      });

      
    
  }
  
  

}
