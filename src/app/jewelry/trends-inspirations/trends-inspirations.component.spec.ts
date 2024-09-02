import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsInspirationsComponent } from './trends-inspirations.component';

describe('TrendsInspirationsComponent', () => {
  let component: TrendsInspirationsComponent;
  let fixture: ComponentFixture<TrendsInspirationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendsInspirationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsInspirationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
