import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email:string;

  constructor() { 
    this.title="Bienvenu à EasySalle";
    this.subtitle="Trouvez le lieu idéal pour vos événements";
    
  }

  ngOnInit() {
  }

}
