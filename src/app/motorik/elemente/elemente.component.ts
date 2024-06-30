import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-elemente',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './elemente.component.html',
  styleUrl: './elemente.component.scss',
})
export class ElementeComponent {}
