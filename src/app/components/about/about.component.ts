import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icons/icons.component';

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  features: Feature[] = [
    {
      title: 'Atuação Regional',
      description: 'Presente em Brasília e entorno, oferecendo cobertura completa para você e sua família.'
    },
    {
      title: 'Registro ANS',
      description: 'Operadora registrada na ANS sob nº 41386-1, garantindo sua segurança e tranquilidade.'
    },
    {
      title: 'Produto Certificado',
      description: 'Plano ambulatorial com registro ANS 452.388/04-1, atendendo todas as normas vigentes.'
    },
    {
      title: 'Segmentação Ambulatorial',
      description: 'Especializada em atendimento ambulatorial, focada na prevenção e cuidado contínuo.'
    }
  ];
}
