import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cwe209Component } from './cwe209.component';

describe('Cwe209Component', () => {
  let component: Cwe209Component;
  let fixture: ComponentFixture<Cwe209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cwe209Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cwe209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
