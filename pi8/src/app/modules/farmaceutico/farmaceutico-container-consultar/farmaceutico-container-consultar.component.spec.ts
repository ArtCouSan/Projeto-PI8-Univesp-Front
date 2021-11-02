import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaceuticoContainerConsultarComponent } from './farmaceutico-container-consultar.component';

describe('FarmaceuticoContainerConsultarComponent', () => {
  let component: FarmaceuticoContainerConsultarComponent;
  let fixture: ComponentFixture<FarmaceuticoContainerConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaceuticoContainerConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaceuticoContainerConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
