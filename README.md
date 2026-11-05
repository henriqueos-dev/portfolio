# Portfólio Pessoal

Portfólio web desenvolvido em React e Tailwind CSS para apresentar meus projetos e informações de contato.

Fiz este site com o objetivo de ter uma interface leve, direta e sem dependências externas desnecessárias, servindo como uma apresentação das minhas habilidades e da forma como organizo o código.

---

## O que a aplicação traz

- **Layout responsivo:** Interface adaptada para diferentes resoluções, desde telas compactas de smartphones até monitores maiores com largura controlada para melhor legibilidade.
- **Camada de dados isolada:** Informações de projetos, habilidades e textos centralizadas no arquivo `dadosPortfolio.js`, permitindo atualizar o conteúdo sem precisar alterar a estrutura dos componentes visuais.
- **Cópia de e-mail com Clipboard API:** A seção de contato utiliza a API nativa do navegador de forma assíncrona (`try/catch`) para copiar o e-mail com um clique e fornecer feedback visual temporário.
- **Tema centralizado no CSS:** Paleta de cores padronizada por meio de variáveis no arquivo CSS com a diretiva `@theme` do Tailwind, para manter a consistência visual em todo o projeto.

---

## Tecnologias utilizadas

- React 19
- Tailwind CSS v4
- Vite
- JavaScript

---

## Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/henriqueos-dev/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor local de desenvolvimento:
```bash
npm run dev
```

A aplicação estará acessível no navegador no endereço exibido no terminal (por padrão, `http://localhost:5173`).