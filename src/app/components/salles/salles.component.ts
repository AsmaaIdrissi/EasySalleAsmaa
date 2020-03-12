import { Component, OnInit } from '@angular/core';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss'],
  providers: [SalleService]
})
export class SallesComponent implements OnInit {

 salles$: Salle[];

  
    constructor(
      private _salleService: SalleService
    ) {

    }
  
    ngOnInit() {
      this.findAll();
      
    }
  
    findAll(){
    
      this._salleService.findAll().subscribe((data: Salle[]) => {
            this.salles$ = data;
            console.log(data);
          }
           
     )
    }
    getImage(elem) {
      this._salleService.getOne(elem.img.imageGroupId, 'MEDIUM').subscribe((data: Blob) => {
              const reader = new FileReader();
              reader.addEventListener("load", () => {
                  elem.img.content = reader.result;
              }, false);
              if (data) {
                  reader.readAsDataURL(data);
              }
          }
      )
  }

  
    
   

}
