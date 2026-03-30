# Benecap Saúde - Angular 21

Projeto convertido de React para Angular 21.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## Instalação

1. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

## Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm start
```

ou

```bash
ng serve
```

O aplicativo estará disponível em `http://localhost:8080`

## Build

Para criar uma build de produção:

```bash
npm run build
```

Para criar uma build de desenvolvimento:

```bash
npm run build:dev
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── header/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── benefits/
│   │   └── ui/             # Componentes UI (Button, Input, Card, etc.)
│   ├── pages/              # Páginas da aplicação
│   │   ├── index/
│   │   ├── area-prestador/
│   │   ├── atualizacao-cadastro/
│   │   └── not-found/
│   ├── lib/                # Utilitários
│   ├── app.component.ts    # Componente raiz
│   └── app.routes.ts       # Configuração de rotas
├── assets/                 # Arquivos estáticos (imagens, etc.)
├── styles.css              # Estilos globais
└── main.ts                 # Ponto de entrada
```

## Tecnologias Utilizadas

- Angular 21
- TypeScript
- Tailwind CSS
- Lucide Angular (ícones)
- Standalone Components

## Conversão de React para Angular

Este projeto foi convertido de React para Angular 21. As principais mudanças incluem:

- Componentes React convertidos para Angular Standalone Components
- React Router substituído por Angular Router
- Hooks do React convertidos para propriedades e métodos de componentes Angular
- JSX convertido para templates Angular
- Imports e estrutura de módulos adaptados para Angular

## Notas

- Os componentes UI foram adaptados do shadcn/ui para Angular
- Os ícones do lucide-react foram substituídos por lucide-angular
- O Tailwind CSS foi mantido e configurado para funcionar com Angular
