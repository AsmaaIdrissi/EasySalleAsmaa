import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Reservation } from '../models/reservation';
import { Global } from './global';


@Injectable()
export class ReservationService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url;

    }

   
    saveResevation(reservation:Reservation):Observable<any>{
        let params=JSON.stringify(reservation);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-reservation', params, {headers: headers});
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

