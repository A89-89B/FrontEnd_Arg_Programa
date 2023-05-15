import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRedComponent } from './save-red.component';

describe('SaveRedComponent', () => {
  let component: SaveRedComponent;
  let fixture: ComponentFixture<SaveRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
