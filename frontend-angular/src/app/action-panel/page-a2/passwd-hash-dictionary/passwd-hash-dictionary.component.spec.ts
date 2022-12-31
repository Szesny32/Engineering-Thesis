import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdHashDictionaryComponent } from './passwd-hash-dictionary.component';

describe('PasswdHashDictionaryComponent', () => {
  let component: PasswdHashDictionaryComponent;
  let fixture: ComponentFixture<PasswdHashDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswdHashDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswdHashDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
