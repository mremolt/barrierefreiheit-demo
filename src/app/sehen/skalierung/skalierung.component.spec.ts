import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkalierungComponent } from './skalierung.component';

describe('SkalierungComponent', () => {
  let component: SkalierungComponent;
  let fixture: ComponentFixture<SkalierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkalierungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkalierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
