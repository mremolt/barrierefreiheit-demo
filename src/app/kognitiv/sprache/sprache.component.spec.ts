import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpracheComponent } from './sprache.component';

describe('SpracheComponent', () => {
  let component: SpracheComponent;
  let fixture: ComponentFixture<SpracheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpracheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpracheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
