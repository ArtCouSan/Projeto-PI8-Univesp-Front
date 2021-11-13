import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaContainerCadastrarComponent } from './receita-container-cadastrar.component';

describe('ReceitaContainerCadastrarComponent', () => {
  let component: ReceitaContainerCadastrarComponent;
  let fixture: ComponentFixture<ReceitaContainerCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaContainerCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaContainerCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
