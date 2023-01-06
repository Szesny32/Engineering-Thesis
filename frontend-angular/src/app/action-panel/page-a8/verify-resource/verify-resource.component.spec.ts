import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyResourceComponent } from './verify-resource.component';

describe('VerifyResourceComponent', () => {
  let component: VerifyResourceComponent;
  let fixture: ComponentFixture<VerifyResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
