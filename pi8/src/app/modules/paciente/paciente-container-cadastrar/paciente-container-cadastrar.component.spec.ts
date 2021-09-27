import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteContainerCadastrarComponent } from './paciente-container-cadastrar.component';

describe('PacienteContainerCadastrarComponent', () => {
  let component: PacienteContainerCadastrarComponent;
  let fixture: ComponentFixture<PacienteContainerCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteContainerCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteContainerCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
