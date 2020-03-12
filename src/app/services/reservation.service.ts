import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Reservation } from '../models/reservation';
import { Global } from './global';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ReservationService{
    public url: string;

    constructor(
        private _http: HttpClient,
        private route: ActivatedRoute
    ){
        this.url=Global.url;

    }

   
    saveResevation(reservation:Reservation):Observable<any>{
        let params=JSON.stringify(reservation);
        console.log(params);
        let id: string
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
this.route.paramMap.subscribe((paramsR)=>{id=paramsR.get('id')})
        return this._http.post('http://localhost:8080/reservation/reserver?dateDebut='
        +reservation.dateDebut+'&dateFin='+reservation.dateFin+'&mail='+reservation.email+'&idSalle='+id, {headers: headers});
    }

    getReservations(): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'reservations', {headers: headers});
    }
    getReservation(id): Observable<any>{
        let headers= new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'reservation/'+id, {headers: headers});
    }

    deleteReservation(id):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'reservation/'+id, {headers: headers});

    }

    updateReservation(reservation):Observable<any>{
        let params = JSON.stringify(reservation);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'reservation/'+reservation._id, params, {headers: headers});
    }

}

