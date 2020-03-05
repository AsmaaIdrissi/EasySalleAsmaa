import { Component, OnInit } from '@angular/core';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [SalleService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;

  public salle: Salle;

  public save_salle;
  
  public status:string;
  
  public filesToUpload:Array<File>;

  public url: string;

  
    constructor(
  
      private _salleService: SalleService,
      private _uploadService: UploadService,
      private _route: ActivatedRoute,
      private _router: Router
  
    ) 
    { 
      this.title = "Edit Salle";
      this.url = Global.url;
   
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

    onSubmit(){
      this._salleService.updateSalle(this.salle).subscribe(
        response=>{
          if(response.salle){
            if(this.filesToUpload){
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.salle._id, [], this.filesToUpload, 'image')
              .then((result:any)=>{
                this.save_salle=result.salle;
                
                this.status='succes';
            
              });
            }else{
              this.save_salle= response.salle;
                
              this.status='succes';
            }
          
       
        }else{
          this.status='failed';
        }
        },error=>{
          console.log(<any>error);
        }
      );
    }
    fileChangeEvent(fileInput:any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }
  

}
