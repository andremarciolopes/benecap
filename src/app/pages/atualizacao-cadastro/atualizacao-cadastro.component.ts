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
  selector: 'app-atualizacao-cadastro',
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
  templateUrl: './atualizacao-cadastro.component.html',
  styleUrls: ['./atualizacao-cadastro.component.css']
})
export class AtualizacaoCadastroComponent {
  inscricao = '';
  senha = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    // Implementar lógica de autenticação
    console.log('Atualização de cadastro:', { inscricao: this.inscricao, senha: this.senha });
  }
}
