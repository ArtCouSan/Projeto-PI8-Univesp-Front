import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginContainerComponent } from './sigin-container.component';

describe('SiginContainerComponent', () => {
  let component: SiginContainerComponent;
  let fixture: ComponentFixture<SiginContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
