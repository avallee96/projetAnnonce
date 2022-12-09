import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceInvalidComponent } from './annonce-invalid.component';

describe('AnnonceInvalidComponent', () => {
  let component: AnnonceInvalidComponent;
  let fixture: ComponentFixture<AnnonceInvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceInvalidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
