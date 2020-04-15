import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AStatusComponent } from './a-status.component';

describe('AStatusComponent', () => {
  let component: AStatusComponent;
  let fixture: ComponentFixture<AStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
