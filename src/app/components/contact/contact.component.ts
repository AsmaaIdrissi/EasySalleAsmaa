import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {


public title: string;

public contact: Contact;

public status:string;



  constructor(

    private _contactService: ContactService,
   

  ) 
  { 
    this.title = "Formulaire de Contact";
    this.contact = new Contact('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(form){

      //Guardar datos basicos

    this._contactService.saveContact(this.contact).subscribe(
      response=>{
       
        console.log(response);
            
            this.status='succes';
          
            form.reset();
          },
          error=>{
            console.log(<any>error);
          }

          );
       
     
     
    

  
        }
}
