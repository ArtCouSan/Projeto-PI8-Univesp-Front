import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaceuticoContainerCadastrarComponent } from './farmaceutico-container-cadastrar.component';

describe('FarmaceuticoContainerCadastrarComponent', () => {
  let component: FarmaceuticoContainerCadastrarComponent;
  let fixture: ComponentFixture<FarmaceuticoContainerCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaceuticoContainerCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaceuticoContainerCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
