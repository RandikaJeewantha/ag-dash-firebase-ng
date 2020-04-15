import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AHeightComponent } from './a-height.component';

describe('AHeightComponent', () => {
  let component: AHeightComponent;
  let fixture: ComponentFixture<AHeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AHeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
