import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomenubarComponent } from './todomenubar.component';

describe('TodomenubarComponent', () => {
  let component: TodomenubarComponent;
  let fixture: ComponentFixture<TodomenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodomenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodomenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
