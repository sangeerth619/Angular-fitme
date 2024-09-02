import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationToolComponent } from './customization-tool.component';

describe('CustomizationToolComponent', () => {
  let component: CustomizationToolComponent;
  let fixture: ComponentFixture<CustomizationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizationToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
