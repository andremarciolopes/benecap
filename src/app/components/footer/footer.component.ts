import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icons/icons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
