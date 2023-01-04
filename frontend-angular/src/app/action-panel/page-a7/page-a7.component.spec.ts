import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA7Component } from './page-a7.component';

describe('PageA7Component', () => {
  let component: PageA7Component;
  let fixture: ComponentFixture<PageA7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageA7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
