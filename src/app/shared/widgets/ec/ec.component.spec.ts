import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECComponent } from './ec.component';

describe('ECComponent', () => {
  let component: ECComponent;
  let fixture: ComponentFixture<ECComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
