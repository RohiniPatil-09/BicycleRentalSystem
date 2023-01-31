import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbicycleComponent } from './viewbicycle.component';

describe('ViewbicycleComponent', () => {
  let component: ViewbicycleComponent;
  let fixture: ComponentFixture<ViewbicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbicycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
