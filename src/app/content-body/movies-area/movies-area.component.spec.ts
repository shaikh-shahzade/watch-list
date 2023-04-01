import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAreaComponent } from './movies-area.component';

describe('MoviesAreaComponent', () => {
  let component: MoviesAreaComponent;
  let fixture: ComponentFixture<MoviesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
