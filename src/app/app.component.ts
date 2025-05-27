import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './app.component.css',
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active">Simple</a>
      <a routerLink="/live" routerLinkActive="active">Live</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
