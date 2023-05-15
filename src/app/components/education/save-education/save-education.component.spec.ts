import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEducationComponent } from './save-education.component';

describe('SaveEducationComponent', () => {
  let component: SaveEducationComponent;
  let fixture: ComponentFixture<SaveEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
