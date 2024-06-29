import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-kontrast',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatCardModule],
  templateUrl: './kontrast.component.html',
  styleUrl: './kontrast.component.scss',
})
export class KontrastComponent {}
