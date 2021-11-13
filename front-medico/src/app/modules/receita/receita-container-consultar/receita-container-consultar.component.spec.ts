import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaContainerConsultarComponent } from './receita-container-consultar.component';

describe('ReceitaContainerConsultarComponent', () => {
  let component: ReceitaContainerConsultarComponent;
  let fixture: ComponentFixture<ReceitaContainerConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaContainerConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaContainerConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
