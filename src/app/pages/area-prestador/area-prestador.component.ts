import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { InputComponent } from '../../components/ui/input/input.component';
import { LabelComponent } from '../../components/ui/label/label.component';
import {
  CardComponent,
  CardContentComponent,
  CardDescriptionComponent,
  CardHeaderComponent,
  CardTitleComponent
} from '../../components/ui/card/card.component';

@Component({
  selector: 'app-area-prestador',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent
  ],
  templateUrl: './area-prestador.component.html',
  styleUrls: ['./area-prestador.component.css']
})
export class AreaPrestadorComponent {
  cnpj = '';
  senha = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    // Implementar lógica de autenticação
    console.log('Login prestador:', { cnpj: this.cnpj, senha: this.senha });
  }
}
