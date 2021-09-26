import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaContainerCadastrarComponent } from './farmacia-container-cadastrar.component';

describe('FarmaciaContainerCadastrarComponent', () => {
  let component: FarmaciaContainerCadastrarComponent;
  let fixture: ComponentFixture<FarmaciaContainerCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaciaContainerCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaContainerCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
