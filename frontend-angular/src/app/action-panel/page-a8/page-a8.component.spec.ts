import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA8Component } from './page-a8.component';

describe('PageA8Component', () => {
  let component: PageA8Component;
  let fixture: ComponentFixture<PageA8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageA8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
