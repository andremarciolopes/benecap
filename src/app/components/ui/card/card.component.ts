import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../../../lib/utils';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() class = '';

  get cardClasses(): string {
    return cn('rounded-lg border bg-card text-card-foreground shadow-sm', this.class);
  }
}

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-header.component.html',
  styleUrls: ['./card.component.css']
})
export class CardHeaderComponent {
  @Input() class = '';

  get headerClasses(): string {
    return cn('flex flex-col space-y-1.5 p-6', this.class);
  }
}

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-title.component.html',
  styleUrls: ['./card.component.css']
})
export class CardTitleComponent {
  @Input() class = '';

  get titleClasses(): string {
    return cn('text-2xl font-semibold leading-none tracking-tight', this.class);
  }
}

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-description.component.html',
  styleUrls: ['./card.component.css']
})
export class CardDescriptionComponent {
  @Input() class = '';

  get descriptionClasses(): string {
    return cn('text-sm text-muted-foreground', this.class);
  }
}

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  styleUrls: ['./card.component.css']
})
export class CardContentComponent {
  @Input() class = '';

  get contentClasses(): string {
    return cn('p-6 pt-0', this.class);
  }
}
