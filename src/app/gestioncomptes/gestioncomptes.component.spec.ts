import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncomptesComponent } from './gestioncomptes.component';

describe('GestioncomptesComponent', () => {
  let component: GestioncomptesComponent;
  let fixture: ComponentFixture<GestioncomptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncomptesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioncomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
