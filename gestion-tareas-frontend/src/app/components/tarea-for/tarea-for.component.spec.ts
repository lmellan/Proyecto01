import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaForComponent } from './tarea-for.component';

describe('TareaForComponent', () => {
  let component: TareaForComponent;
  let fixture: ComponentFixture<TareaForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
