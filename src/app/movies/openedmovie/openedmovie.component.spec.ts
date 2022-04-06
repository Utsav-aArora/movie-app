import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedmovieComponent } from './openedmovie.component';

describe('OpenedmovieComponent', () => {
  let component: OpenedmovieComponent;
  let fixture: ComponentFixture<OpenedmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenedmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
