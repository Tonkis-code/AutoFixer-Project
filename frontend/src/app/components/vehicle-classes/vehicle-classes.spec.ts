import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleClasses } from './vehicle-classes';

describe('VehicleClasses', () => {
  let component: VehicleClasses;
  let fixture: ComponentFixture<VehicleClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleClasses],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleClasses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
