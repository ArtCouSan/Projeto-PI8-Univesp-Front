import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaContainerConsultarComponent } from './farmacia-container-consultar.component';

describe('FarmaciaContainerConsultarComponent', () => {
  let component: FarmaciaContainerConsultarComponent;
  let fixture: ComponentFixture<FarmaciaContainerConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaciaContainerConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaContainerConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
