import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCadastrarFormComponent } from './medico-cadastrar-form.component';

describe('MedicoCadastrarFormComponent', () => {
  let component: MedicoCadastrarFormComponent;
  let fixture: ComponentFixture<MedicoCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
