import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoContainerConsultarComponent } from './medico-container-consultar.component';

describe('MedicoContainerConsultarComponent', () => {
  let component: MedicoContainerConsultarComponent;
  let fixture: ComponentFixture<MedicoContainerConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoContainerConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoContainerConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
