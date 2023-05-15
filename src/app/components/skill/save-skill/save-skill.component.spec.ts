import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSkillComponent } from './save-skill.component';

describe('SaveSkillComponent', () => {
  let component: SaveSkillComponent;
  let fixture: ComponentFixture<SaveSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
