import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrastComponent } from './kontrast.component';

describe('KontrastComponent', () => {
  let component: KontrastComponent;
  let fixture: ComponentFixture<KontrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontrastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
