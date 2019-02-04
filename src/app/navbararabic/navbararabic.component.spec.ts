import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbararabicComponent } from './navbararabic.component';

describe('NavbararabicComponent', () => {
  let component: NavbararabicComponent;
  let fixture: ComponentFixture<NavbararabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbararabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbararabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
