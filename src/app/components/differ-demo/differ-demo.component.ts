import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-differ-demo',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './differ-demo.component.html',
  styleUrl: './differ-demo.component.css'
})
export class DifferDemoComponent {

}
