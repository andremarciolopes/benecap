import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AreaPrestadorComponent } from './pages/area-prestador/area-prestador.component';
import { AtualizacaoCadastroComponent } from './pages/atualizacao-cadastro/atualizacao-cadastro.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { RedeCredenciadaComponent } from './pages/rede-credenciada/rede-credenciada.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'rede-credenciada', component: RedeCredenciadaComponent },
  { path: 'area-prestador', component: AreaPrestadorComponent },
  { path: 'atualizacao-cadastro', component: AtualizacaoCadastroComponent },
  { path: '**', component: NotFoundComponent }
];
