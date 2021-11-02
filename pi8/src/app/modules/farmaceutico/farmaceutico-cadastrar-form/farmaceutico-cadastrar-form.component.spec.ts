import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaceuticoCadastrarFormComponent } from './farmaceutico-cadastrar-form.component';

describe('FarmaceuticoCadastrarFormComponent', () => {
  let component: FarmaceuticoCadastrarFormComponent;
  let fixture: ComponentFixture<FarmaceuticoCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaceuticoCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaceuticoCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
