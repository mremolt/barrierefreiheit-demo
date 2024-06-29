import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementeComponent } from './elemente.component';

describe('ElementeComponent', () => {
  let component: ElementeComponent;
  let fixture: ComponentFixture<ElementeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
