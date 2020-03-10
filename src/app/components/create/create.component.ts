import { Component, OnInit } from '@angular/core';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [SalleService, UploadService]
              
})
export class CreateComponent implements OnInit {

public title: string;

public salle: Salle;

public status:string;

public filesToUpload:Array<File>;

public save_salle;

  constructor(

    private _salleService: SalleService,
    private _uploadService: UploadService

  ) 
  { 
    this.title = "Ajouter une Salle";
    this.salle = new Salle('', '', '', '', '', '', '', '','', '');
  }

  ngOnInit() {
  }

  onSubmit(form){

      //Guardar datos basicos

    this._salleService.saveSalle(this.salle).subscribe(
      response=>{
        if(response.salle){
         

          //Subir la imagen
          if(this.filesToUpload){
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.salle._id, [], this.filesToUpload, 'image')
          .then((result:any)=>{
            this.save_salle=result.salle;
            
            this.status='succes';
          
            form.reset();
          });
        }else{
          this.save_salle=response.salle;
            
            this.status='succes';
            form.reset();
        }
       
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );

  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
 

}
