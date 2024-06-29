import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
})
export class ColorsComponent {}
