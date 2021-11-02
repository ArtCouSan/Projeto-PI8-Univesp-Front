import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaCadastrarFormComponent } from './farmacia-cadastrar-form.component';

describe('FarmaciaCadastrarFormComponent', () => {
  let component: FarmaciaCadastrarFormComponent;
  let fixture: ComponentFixture<FarmaciaCadastrarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaciaCadastrarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaCadastrarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
