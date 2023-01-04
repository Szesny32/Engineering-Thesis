import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA6Component } from './page-a6.component';

describe('PageA6Component', () => {
  let component: PageA6Component;
  let fixture: ComponentFixture<PageA6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageA6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
