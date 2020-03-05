import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAboutComponent } from './slider-about.component';

describe('SliderAboutComponent', () => {
  let component: SliderAboutComponent;
  let fixture: ComponentFixture<SliderAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
