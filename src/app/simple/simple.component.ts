import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./simple.component.css'],
  template: `
    <h2>Simple: Button Color on Click</h2>

    <input [(ngModel)]="color" placeholder="Enter a color (e.g., red, #ff0000)" />
    <button (click)="changeColor()" [style.background]="buttonColor">
      Click Me
    </button>

    <!-- Error Message -->
    <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
  `
})
export class SimpleComponent {
  color: string = '';
  buttonColor: string = 'gray';
  errorMessage: string = '';

  /**
   * Triggered when the user clicks the button.
   * Validates if the entered value is a valid CSS color.
   * If valid, updates button color. Else, shows error.
   */
  changeColor() {
    if (this.isValidCssColor(this.color)) {
      this.buttonColor = this.color;
      this.errorMessage = ''; // Clear error if valid
    } else {
      this.errorMessage = '❌ Enter a valid colour name or code';
    }
  }

  /**
   * Validates the color string using browser CSS support.
   */
  isValidCssColor(color: string): boolean {
    const s = new Option().style;
    s.color = '';
    s.color = color;
    return !!s.color;
  }
}
