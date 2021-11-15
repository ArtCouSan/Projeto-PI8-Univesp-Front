import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmaceuticoContainerComponent } from './farmaceutico-container.component';


describe('FarmaceuticoContainerComponent', () => {
  let component: FarmaceuticoContainerComponent;
  let fixture: ComponentFixture<FarmaceuticoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaceuticoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaceuticoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
