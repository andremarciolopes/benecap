import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: string | number = 24;
  @Input() class: string = '';
  @Input() fill: string = 'none';
  @Input() stroke: string = 'currentColor';
}
