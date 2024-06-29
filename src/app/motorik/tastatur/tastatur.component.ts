import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tastatur',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './tastatur.component.html',
  styleUrl: './tastatur.component.scss',
})
export class TastaturComponent {
  constructor(private snackBar: MatSnackBar) {}

  showSaveMessage(): void {
    this.snackBar.open('Die Daten wurden erfolgreich NICHT gespeichert!');
  }
}
