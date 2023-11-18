import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpWindowComponent } from './gmp-window.component';

describe('GmpWindowComponent', () => {
  let component: GmpWindowComponent;
  let fixture: ComponentFixture<GmpWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
