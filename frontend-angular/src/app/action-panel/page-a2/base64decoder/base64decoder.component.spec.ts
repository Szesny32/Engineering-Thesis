import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64decoderComponent } from './base64decoder.component';

describe('Base64decoderComponent', () => {
  let component: Base64decoderComponent;
  let fixture: ComponentFixture<Base64decoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64decoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64decoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
