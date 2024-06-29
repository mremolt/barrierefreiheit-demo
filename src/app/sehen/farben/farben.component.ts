import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-farben',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatCardModule, MatIconModule],
  templateUrl: './farben.component.html',
  styleUrl: './farben.component.scss',
})
export class FarbenComponent {
  public pickedColor = signal('');
  public selectedColor = signal('');
  public readonly messageType = signal<'color' | 'icon'>('color');

  public readonly colorOptions = [
    'rot',
    'rosa',
    'gelb',
    'grün',
    'hellgrün',
    'blau',
    'hellblau',
    'grau',
    'schwarz',
    'weiß',
  ];
}
