import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Global } from '../../services/global';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  providers:[ ReservationService ]
})
export class ReservationComponent implements OnInit {

  public title:String;
  public reservation:Reservation;
  public status:String;



  constructor(
    private _reservationService:ReservationService
  ) {
this.title="Formulaire de reservation";
this.reservation=new Reservation('','','','','', null, null);

   }
 ngOnInit() {
  }

  onSubmit(form){
    this._reservationService.saveResevation(this.reservation).subscribe(
      response=>{
        console.log(response);
        this.status='succes';
          
        form.reset();

      },error=>{
        console.log(<any>error);

      }

    )




  }

}