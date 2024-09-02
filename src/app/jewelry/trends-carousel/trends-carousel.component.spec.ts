import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsCarouselComponent } from './trends-carousel.component';

describe('TrendsCarouselComponent', () => {
  let component: TrendsCarouselComponent;
  let fixture: ComponentFixture<TrendsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
