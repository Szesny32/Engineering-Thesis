import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA5Component } from './page-a5.component';

describe('PageA5Component', () => {
  let component: PageA5Component;
  let fixture: ComponentFixture<PageA5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageA5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
