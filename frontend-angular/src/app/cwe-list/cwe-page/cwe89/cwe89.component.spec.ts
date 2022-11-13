import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cwe89Component } from './cwe89.component';

describe('Cwe89Component', () => {
  let component: Cwe89Component;
  let fixture: ComponentFixture<Cwe89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cwe89Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cwe89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
