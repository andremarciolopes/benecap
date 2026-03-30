import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../ui/button/button.component';
import { IconComponent } from '../ui/icons/icons.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  // Signal que controla qual div será exibida (true para Div A, false para Div B)
  exibirPrimeira = signal(true);

  private intervalId: any;

  ngOnInit() {
    // Inicia o intervalo de 3 segundos (3000ms)
    this.intervalId = setInterval(() => {
      this.exibirPrimeira.update(valor => !valor);
    }, 5000);
  }

  ngOnDestroy() {
    // Limpa o intervalo quando o componente for destruído para evitar vazamento de memória
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}