import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleClassCard } from './vehicle-class-card';

describe('VehicleClassCard', () => {
  let component: VehicleClassCard;
  let fixture: ComponentFixture<VehicleClassCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleClassCard],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleClassCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
