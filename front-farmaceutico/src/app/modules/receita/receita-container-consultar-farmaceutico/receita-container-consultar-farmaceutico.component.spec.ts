import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaContainerConsultarFarmaceuticoComponent } from './receita-container-consultar-farmaceutico.component';


describe('ReceitaContainerConsultarFarmaceuticoComponent', () => {
  let component: ReceitaContainerConsultarFarmaceuticoComponent;
  let fixture: ComponentFixture<ReceitaContainerConsultarFarmaceuticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaContainerConsultarFarmaceuticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaContainerConsultarFarmaceuticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
