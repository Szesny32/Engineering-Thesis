import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwePageComponent } from './cwe-page.component';

describe('CwePageComponent', () => {
  let component: CwePageComponent;
  let fixture: ComponentFixture<CwePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
