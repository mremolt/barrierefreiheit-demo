import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatischComponent } from './automatisch.component';

describe('AutomatischComponent', () => {
  let component: AutomatischComponent;
  let fixture: ComponentFixture<AutomatischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatischComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
