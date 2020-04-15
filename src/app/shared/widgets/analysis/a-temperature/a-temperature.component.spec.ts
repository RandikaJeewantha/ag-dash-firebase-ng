import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATemperatureComponent } from './a-temperature.component';

describe('ATemperatureComponent', () => {
  let component: ATemperatureComponent;
  let fixture: ComponentFixture<ATemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
