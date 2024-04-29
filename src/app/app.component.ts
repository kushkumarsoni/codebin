import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NavbarComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codebin';

  constructor() {
    // Initialize Firebase
    initializeApp(firebaseConfig);
  }
}
