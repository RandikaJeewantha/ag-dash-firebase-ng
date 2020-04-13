import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEssentialsAddComponent } from './m-essentials-add.component';

describe('MEssentialsAddComponent', () => {
  let component: MEssentialsAddComponent;
  let fixture: ComponentFixture<MEssentialsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEssentialsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEssentialsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
