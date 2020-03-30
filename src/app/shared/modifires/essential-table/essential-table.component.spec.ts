import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialTableComponent } from './essential-table.component';

describe('EssentialTableComponent', () => {
  let component: EssentialTableComponent;
  let fixture: ComponentFixture<EssentialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
