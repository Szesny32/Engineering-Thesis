import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cwe331Component } from './cwe331.component';

describe('Cwe331Component', () => {
  let component: Cwe331Component;
  let fixture: ComponentFixture<Cwe331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cwe331Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cwe331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
