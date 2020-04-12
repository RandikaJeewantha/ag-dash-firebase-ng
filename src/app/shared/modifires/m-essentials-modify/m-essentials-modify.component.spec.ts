import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEssentialsModifyComponent } from './m-essentials-modify.component';

describe('MEssentialsCardComponent', () => {
  let component: MEssentialsModifyComponent;
  let fixture: ComponentFixture<MEssentialsModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEssentialsModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEssentialsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
