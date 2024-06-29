import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenreaderComponent } from './screenreader.component';

describe('ScreenreaderComponent', () => {
  let component: ScreenreaderComponent;
  let fixture: ComponentFixture<ScreenreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenreaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
