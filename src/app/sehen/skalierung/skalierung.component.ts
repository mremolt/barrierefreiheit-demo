import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skalierung',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './skalierung.component.html',
  styleUrl: './skalierung.component.scss',
})
export class SkalierungComponent {
  public imageWidth = signal(128);

  public toggleZoom(): void {
    if (this.imageWidth() == 128) {
      this.imageWidth.set(512);
    } else {
      this.imageWidth.set(128);
    }
  }
}
