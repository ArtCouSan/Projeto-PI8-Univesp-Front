import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteContainerConsultarComponent } from './paciente-container-consultar.component';

describe('PacienteContainerConsultarComponent', () => {
  let component: PacienteContainerConsultarComponent;
  let fixture: ComponentFixture<PacienteContainerConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteContainerConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteContainerConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
