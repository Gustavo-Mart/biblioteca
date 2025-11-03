# 📚 Biblioteca

Uma interface moderna e interativa de biblioteca construída com React, TypeScript e Tailwind CSS, permitindo aos usuários pesquisar, favoritar e reservar livros.

![Biblioteca Preview](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Funcionalidades

### 🔍 Pesquisa de Livros
- Busca em tempo real por título ou autor
- Interface intuitiva com filtros dinâmicos
- Grid responsivo que se adapta a diferentes tamanhos de tela

### ❤️ Sistema de Favoritos
- Adicione e remova livros dos seus favoritos
- Visualize todos os livros favoritos em uma aba dedicada
- Persistência de dados usando localStorage
- Animações suaves com Framer Motion

### 📅 Sistema de Reservas
- Reserve livros por 1 semana
- Acompanhe a data de devolução
- Gerencie suas reservas ativas
- Devolva livros com um clique

### 🎨 Interface Moderna
- Design responsivo e mobile-first
- Menu lateral com animações fluidas
- Modal detalhado para informações do livro
- Tema de cores personalizado e harmonioso
- Transições e animações suaves

## 🚀 Tecnologias Utilizadas

- **React 18+** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Vite** - Build tool rápido e moderno
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones modernos e customizáveis

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

## 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Gustavo-Mart/biblioteca.git
   cd biblioteca
   ```

2. **Instale as dependências:**
   
   Usando npm:
   ```bash
   npm install
   ```
   
   Ou usando yarn:
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   
   Usando npm:
   ```bash
   npm run dev
   ```
   
   Ou usando yarn:
   ```bash
   yarn dev
   ```

4. **Acesse a aplicação:**
   
   Abra seu navegador e acesse: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
biblioteca/
├── public/                      # Arquivos estáticos
│   └── assets/                  # Imagens das capas dos livros
│       ├── design_interacao.png
│       ├── interface_hc.png
│       └── ...
├── src/
│   ├── components/              # Componentes React
│   │   ├── ui/                  # Componentes UI reutilizáveis
│   │   │   ├── Card.tsx         # Card de livro
│   │   │   ├── Input.tsx        # Input de pesquisa
│   │   │   └── Modal.tsx        # Modal de detalhes
│   │   ├── AccountTab.tsx       # Aba de reservas
│   │   ├── FavoriteTab.tsx      # Aba de favoritos
│   │   ├── Grid.tsx             # Grid de livros
│   │   ├── SearchTab.tsx        # Aba de pesquisa
│   │   └── SideMenu.tsx         # Menu lateral
│   ├── App.tsx                  # Componente principal
│   ├── App.css                  # Estilos e tema
│   ├── data.ts                  # Dados dos livros
│   ├── types.ts                 # Definições TypeScript
│   ├── index.css                # Estilos globais
│   └── main.tsx                 # Ponto de entrada
├── index.html                   # HTML principal
├── package.json                 # Dependências do projeto
├── tailwind.config.js           # Configuração do Tailwind
├── tsconfig.json                # Configuração do TypeScript
└── vite.config.ts               # Configuração do Vite
```

## 🎯 Como Usar

### Navegação
- Use o **menu hamburguer** no canto superior direito para navegar entre as abas
- **Biblioteca**: Visualize e pesquise todos os livros disponíveis
- **Favoritos**: Acesse seus livros favoritos
- **Reservas**: Gerencie suas reservas ativas

### Pesquisar Livros
1. Na aba "Biblioteca", use a barra de pesquisa
2. Digite o nome do livro ou autor
3. Os resultados são filtrados automaticamente

### Favoritar Livros
1. Passe o mouse sobre um livro ou clique nele
2. Clique no ícone de coração ❤️
3. O livro será adicionado aos favoritos

### Reservar Livros
1. Clique em um livro para ver detalhes
2. Clique em "Reservar por 1 semana"
3. O livro aparecerá na aba "Reservas"
4. A data de devolução é automaticamente calculada

### Devolver Livros
1. Acesse a aba "Reservas"
2. Clique em "Devolver Livro"
3. O livro será removido das suas reservas

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto não possui licença definida. Todos os direitos reservados.

## 👥 Autores

- **Gustavo Mart** - [GitHub](https://github.com/Gustavo-Mart)

## 🙏 Agradecimentos

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!