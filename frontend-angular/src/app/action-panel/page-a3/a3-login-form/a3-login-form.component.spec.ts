import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3LoginFormComponent } from './a3-login-form.component';

describe('A3LoginFormComponent', () => {
  let component: A3LoginFormComponent;
  let fixture: ComponentFixture<A3LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3LoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
