import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() largeur: number;
  @Input('etiquetas') captions:boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor:any;

  constructor() {
    this.autor={
      nombre: "Libia Sana",
      website: "PortfolioLS",
      linkedin: "Libia Sana"
    };
   }

  ngOnInit() {
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background", "green")
                 .css("height", "100px");
    });

    $(".galery").bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth:this.largeur

    });
    //Lanzar el evento
    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}
