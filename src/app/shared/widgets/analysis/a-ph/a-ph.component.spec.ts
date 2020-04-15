import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APhComponent } from './a-ph.component';

describe('APhComponent', () => {
  let component: APhComponent;
  let fixture: ComponentFixture<APhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
