import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public videoVisible = signal(false);

  public showVideo(): void {
    this.videoVisible.set(true);
  }
}
