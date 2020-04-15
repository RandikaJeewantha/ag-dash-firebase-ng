import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AEcComponent } from './a-ec.component';

describe('AEcComponent', () => {
  let component: AEcComponent;
  let fixture: ComponentFixture<AEcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AEcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
