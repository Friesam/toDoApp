import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselCOnfigComponent } from './ngbd-carousel-config.component';

describe('NgbdCarouselCOnfigComponent', () => {
  let component: NgbdCarouselCOnfigComponent;
  let fixture: ComponentFixture<NgbdCarouselCOnfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdCarouselCOnfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselCOnfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
