import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icons/icons.component';

interface Benefit {
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      title: 'Rede Credenciada Completa',
      description: 'Acesso a uma ampla rede de profissionais e clínicas especializadas em Brasília e entorno.'
    },
    {
      title: 'Agilidade no Atendimento',
      description: 'Processos simplificados e atendimento rápido para que você não perca tempo.'
    },
    {
      title: 'Segurança e Confiança',
      description: 'Operadora registrada na ANS, seguindo todas as normas e regulamentações.'
    },
    {
      title: 'Foco na Prevenção',
      description: 'Incentivamos o cuidado preventivo com check-ups e acompanhamento contínuo.'
    },
    {
      title: 'Atendimento Humanizado',
      description: 'Equipe dedicada a oferecer um atendimento próximo, acolhedor e personalizado.'
    },
    {
      title: 'Planos Acessíveis',
      description: 'Valores justos e condições facilitadas para você cuidar da sua saúde.'
    }
  ];
}
