import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-screenreader',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './screenreader.component.html',
  styleUrl: './screenreader.component.scss',
})
export class ScreenreaderComponent {
  public counter = signal(0);

  public increase(): void {
    this.counter.set(this.counter() + 1);
  }
}
