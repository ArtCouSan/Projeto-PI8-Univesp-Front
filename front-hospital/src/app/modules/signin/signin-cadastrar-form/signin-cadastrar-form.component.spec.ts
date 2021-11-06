import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninCadastrarFormComponent } from './signin-cadastrar-form.component';

describe('SigninCadastrarFormComponent', () => {
  let component: SigninCadastrarFormComponent;
  let fixture: ComponentFixture<SigninCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
