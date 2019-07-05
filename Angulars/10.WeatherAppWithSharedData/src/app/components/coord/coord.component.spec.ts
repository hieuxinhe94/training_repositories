import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordComponent } from './coord.component';

describe('CoordComponent', () => {
  let component: CoordComponent;
  let fixture: ComponentFixture<CoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
