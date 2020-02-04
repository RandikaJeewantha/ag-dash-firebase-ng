import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEssentialsCardComponent } from './m-essentials-card.component';

describe('MEssentialsCardComponent', () => {
  let component: MEssentialsCardComponent;
  let fixture: ComponentFixture<MEssentialsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEssentialsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEssentialsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
