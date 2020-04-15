import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALightComponent } from './a-light.component';

describe('ALightComponent', () => {
  let component: ALightComponent;
  let fixture: ComponentFixture<ALightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
