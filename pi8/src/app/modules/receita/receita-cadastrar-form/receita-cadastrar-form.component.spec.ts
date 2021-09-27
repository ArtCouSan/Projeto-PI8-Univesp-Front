import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCadastrarFormComponent } from './receita-cadastrar-form.component';

describe('ReceitaCadastrarFormComponent', () => {
  let component: ReceitaCadastrarFormComponent;
  let fixture: ComponentFixture<ReceitaCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
