import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAboutComponent } from './img-about.component';

describe('ImgAboutComponent', () => {
  let component: ImgAboutComponent;
  let fixture: ComponentFixture<ImgAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
