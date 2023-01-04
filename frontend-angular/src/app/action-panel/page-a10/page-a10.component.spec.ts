import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA10Component } from './page-a10.component';

describe('PageA10Component', () => {
  let component: PageA10Component;
  let fixture: ComponentFixture<PageA10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageA10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
