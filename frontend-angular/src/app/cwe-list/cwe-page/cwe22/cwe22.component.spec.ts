import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cwe22Component } from './cwe22.component';

describe('Cwe22Component', () => {
  let component: Cwe22Component;
  let fixture: ComponentFixture<Cwe22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cwe22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cwe22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
