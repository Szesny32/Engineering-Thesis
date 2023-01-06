import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSignVerifyComponent } from './digital-sign-verify.component';

describe('DigitalSignVerifyComponent', () => {
  let component: DigitalSignVerifyComponent;
  let fixture: ComponentFixture<DigitalSignVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalSignVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalSignVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
