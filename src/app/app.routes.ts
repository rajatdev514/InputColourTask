import { Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { LiveComponent } from './live/live.component';

export const routes: Routes = [
  { path: '', component: SimpleComponent },
  { path: 'live', component: LiveComponent }
];
