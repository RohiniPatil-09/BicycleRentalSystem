import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbicycleComponent } from './addbicycle.component';

describe('AddbicycleComponent', () => {
  let component: AddbicycleComponent;
  let fixture: ComponentFixture<AddbicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbicycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
