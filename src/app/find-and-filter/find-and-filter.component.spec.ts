import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAndFilterComponent } from './find-and-filter.component';

describe('FindAndFilterComponent', () => {
  let component: FindAndFilterComponent;
  let fixture: ComponentFixture<FindAndFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAndFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
