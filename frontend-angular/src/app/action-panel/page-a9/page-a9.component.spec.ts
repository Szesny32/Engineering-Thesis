import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA9Component } from './page-a9.component';

describe('PageA9Component', () => {
  let component: PageA9Component;
  let fixture: ComponentFixture<PageA9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageA9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
