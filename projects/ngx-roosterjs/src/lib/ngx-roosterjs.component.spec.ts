import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRoosterjsComponent } from './ngx-roosterjs.component';

describe('NgxRoosterjsComponent', () => {
  let component: NgxRoosterjsComponent;
  let fixture: ComponentFixture<NgxRoosterjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRoosterjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRoosterjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
