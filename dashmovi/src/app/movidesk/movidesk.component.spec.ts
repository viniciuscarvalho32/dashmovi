import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovideskComponent } from './movidesk.component';

describe('MovideskComponent', () => {
  let component: MovideskComponent;
  let fixture: ComponentFixture<MovideskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovideskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovideskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
