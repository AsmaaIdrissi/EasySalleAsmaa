import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider-about',
  templateUrl: './slider-about.component.html',
  styleUrls: ['./slider-about.component.scss']
})
export class SliderAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.galerie').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 600
    });

}
}
