import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Salle } from '../models/salle';
import { Global } from './global';
import { catchError, tap, map} from 'rxjs/operators';


@Injectable()
export class SalleService{
    public url: 'http://localhost:8080/salle';
    public salle:Salle;
   
    

    constructor(
        private _http: HttpClient,
      
    ){
        //this.url=Global.url;

    }

    testService(){
        return 'Probando el servicio de angular';
    }
    saveSalle(salle:Salle):Observable<any>{
        let params=JSON.stringify(salle);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-salle', params, {headers: headers});
    }

  
    findAll(): Observable<Salle[]>{  
        let headers= new HttpHeaders().set('Content-Type', 'application/json');             
                return this._http.get<Salle[]>('http://localhost:8080/salle/all', {headers: headers})          
        }
      
            
            
            
    
    getSalle(id): Observable<any>{
        let headers= new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'salle/'+id, {headers: headers});
    }

    deleteSalle(id):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'salle/'+id, {headers: headers});

    }

    updateSalle(salle):Observable<any>{
        let params = JSON.stringify(salle);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'salle/'+salle._id, params, {headers: headers});
    }
    search(searchString):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);

    }

}