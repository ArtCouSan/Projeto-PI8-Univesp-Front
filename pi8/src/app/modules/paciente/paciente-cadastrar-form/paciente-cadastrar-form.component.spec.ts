import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCadastrarFormComponent } from './paciente-cadastrar-form.component';

describe('PacienteCadastrarFormComponent', () => {
  let component: PacienteCadastrarFormComponent;
  let fixture: ComponentFixture<PacienteCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
