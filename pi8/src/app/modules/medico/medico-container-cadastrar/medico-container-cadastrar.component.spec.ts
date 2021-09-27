import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoContainerCadastrarComponent } from './medico-container-cadastrar.component';

describe('MedicoContainerCadastrarComponent', () => {
  let component: MedicoContainerCadastrarComponent;
  let fixture: ComponentFixture<MedicoContainerCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoContainerCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoContainerCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
