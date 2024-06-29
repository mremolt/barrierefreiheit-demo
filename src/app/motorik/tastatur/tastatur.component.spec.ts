import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastaturComponent } from './tastatur.component';

describe('TastaturComponent', () => {
  let component: TastaturComponent;
  let fixture: ComponentFixture<TastaturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastaturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
