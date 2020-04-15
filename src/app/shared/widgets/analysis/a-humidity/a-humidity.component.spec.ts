import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AHumidityComponent } from './a-humidity.component';

describe('AHumidityComponent', () => {
  let component: AHumidityComponent;
  let fixture: ComponentFixture<AHumidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AHumidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
