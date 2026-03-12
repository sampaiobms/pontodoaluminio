# Ponto do Alumínio — Site Institucional

Site estático multi-página pronto para deploy no **Vercel via GitHub**.

## Estrutura

```
ponto-aluminio/
├── index.html          → Página Principal
├── produtos.html       → Produtos (Linha Alumínio + Linha Branca)
├── promocao.html       → Promoções
├── vercel.json         → Configuração Vercel
├── css/
│   ├── style.css       → Estilos globais (nav, footer, base)
│   ├── home.css        → Estilos da página principal
│   ├── produtos.css    → Estilos da página de produtos
│   └── promocao.css    → Estilos da página de promoções
└── js/
    ├── main.js         → Scripts globais (scroll, reveal, counters)
    └── components.js   → Nav e Footer injetados automaticamente
```

## Deploy no Vercel

### Via GitHub (recomendado)

1. Faça o upload desta pasta para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em **"Add New Project"**
4. Importe o repositório do GitHub
5. Mantenha as configurações padrão (Framework: Other)
6. Clique em **Deploy** ✓

O `vercel.json` já está configurado com:
- URLs limpas (`/produtos` em vez de `/produtos.html`)
- Headers de segurança
- Cache de assets (CSS/JS)

### Deploy manual via Vercel CLI

```bash
npm i -g vercel
cd ponto-aluminio
vercel
```

## Personalização

### Alterar informações de contato
Edite `js/components.js` — seção do footer com endereço, telefone e WhatsApp.
Substitua `5511900000000` pelo número real no link do WhatsApp.

### Adicionar fotos reais
Substitua os blocos `.img-placeholder` em `index.html` por tags `<img>` reais.
Coloque as imagens numa pasta `/img/`.

### Editar produtos em promoção
Em `promocao.html`, edite os cards `.promo-item` e `.promo-card` com os produtos, preços e descontos reais.

### Cores e tipografia
Todas as variáveis de design estão no topo de `css/style.css` em `:root {}`.

## Paleta de Cores

| Variável       | Cor          | Uso                    |
|----------------|--------------|------------------------|
| `--white`      | `#FFFFFF`    | Fundo de cards         |
| `--bg`         | `#F8F7F4`    | Fundo principal        |
| `--navy`       | `#1C2B3A`    | Texto principal, botões|
| `--copper`     | `#B87333`    | Destaque, links, preços|
| `--border`     | `#E2DDD7`    | Bordas e divisores     |
