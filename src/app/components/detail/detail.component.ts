import { Component, OnInit } from '@angular/core';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params }  from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [SalleService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public salle: Salle;
  public confirm:boolean;

  constructor(
    private _salleService: SalleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm=false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {  //recojo los parametros que me llega por la url
      let id = params.id;
      this.getSalle(id);
    });
  }

  //peticion ajax al backend
  getSalle(id){
    this._salleService.getSalle(id).subscribe(
      response=>{
          this.salle=response.salle;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm){
    this.confirm=confirm;
  }

  deleteSalle(id){
    this._salleService.deleteSalle(id).subscribe(
      response=>{
        if(response.salle){
          this._router.navigate(['/salles']);
        }
      },
      error=>{
        console.log(<any>error);
      })

  }
  redirigerReservation(){
      this._router.navigate(['/reservation']);

  }
  }


