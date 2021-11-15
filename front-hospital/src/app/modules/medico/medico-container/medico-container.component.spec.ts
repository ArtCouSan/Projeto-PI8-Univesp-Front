import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoContainerComponent } from './medico-container.component';


describe('MedicoContainerComponent', () => {
  let component: MedicoContainerComponent;
  let fixture: ComponentFixture<MedicoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
