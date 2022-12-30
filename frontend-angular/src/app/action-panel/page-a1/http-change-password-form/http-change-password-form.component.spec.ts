import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPChangePasswordFormComponent } from './http-change-password-form.component';

describe('HTTPChangePasswordFormComponent', () => {
  let component: HTTPChangePasswordFormComponent;
  let fixture: ComponentFixture<HTTPChangePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPChangePasswordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTTPChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
