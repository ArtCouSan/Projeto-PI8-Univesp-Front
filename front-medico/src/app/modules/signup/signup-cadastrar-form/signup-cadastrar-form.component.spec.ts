import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCadastrarFormComponent } from './signup-cadastrar-form.component';

describe('SignupCadastrarFormComponent', () => {
  let component: SignupCadastrarFormComponent;
  let fixture: ComponentFixture<SignupCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
