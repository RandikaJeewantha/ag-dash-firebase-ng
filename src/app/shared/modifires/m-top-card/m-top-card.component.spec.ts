import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTopCardComponent } from './m-top-card.component';

describe('MTopCardComponent', () => {
  let component: MTopCardComponent;
  let fixture: ComponentFixture<MTopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTopCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
