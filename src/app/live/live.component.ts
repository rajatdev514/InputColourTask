import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./live.component.css'],
  template: `
    <h2>Complex: Live Color Change</h2>

    <input [(ngModel)]="color" (input)="updateColor()" placeholder="Start typing a color..." />
    <button [style.background]="validColor">
      Live Button
    </button>

    <!-- Error Message -->
    <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
  `
})
export class LiveComponent {
  color: string = '';
  validColor: string = 'gray';
  errorMessage: string = '';

  /**
   * Called on every input event.
   * Validates color and updates button if valid.
   * Shows error if invalid.
   */
  updateColor() {
    if (this.color.trim() === '') {
      this.validColor = 'gray';
      this.errorMessage = '';
      return;
    }

    if (this.isValidCssColor(this.color)) {
      this.validColor = this.color;
      this.errorMessage = '';
    } else {
      this.errorMessage = '❌ Enter a valid colour name or code';
    }
  }

  /**
   * Checks if the input color is valid in CSS.
   */
  isValidCssColor(color: string): boolean {
    const s = new Option().style;
    s.color = '';
    s.color = color;
    return !!s.color;
  }
}
