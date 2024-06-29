import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-screenreader',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './screenreader.component.html',
  styleUrl: './screenreader.component.scss',
})
export class ScreenreaderComponent {
  public counter = signal(0);

  public increase(): void {
    this.counter.set(this.counter() + 1);
  }
}
