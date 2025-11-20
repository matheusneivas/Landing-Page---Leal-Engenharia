# 🌞 Leal Engenharia - Landing Page

Landing page moderna e profissional para empresa de energia solar, desenvolvida com HTML5, CSS3 e JavaScript puro.

## 📋 Características

### ✨ Funcionalidades
- ✅ Design responsivo (mobile-first)
- ✅ Calculadora de economia com energia solar
- ✅ Galeria de projetos realizados
- ✅ FAQ com acordeão interativo
- ✅ Contador animado de estatísticas
- ✅ Contato via WhatsApp (botão flutuante e seção dedicada)
- ✅ Modal de solicitação de orçamento
- ✅ Botão de voltar ao topo
- ✅ Animações suaves ao scroll
- ✅ Navegação fixa com highlight automático

### 🎨 Design
- Paleta de cores profissional (azul, verde, laranja)
- Fontes modernas (Poppins e Inter)
- Efeitos hover e transições suaves
- Gradientes e sombras elegantes
- Layout grid responsivo

### 🚀 Performance
- Lazy loading de imagens
- CSS otimizado
- JavaScript modular e eficiente
- Debounce em eventos de scroll
- Intersection Observer API

### ♿ Acessibilidade
- Textos alternativos em imagens
- Labels apropriados em formulários
- Contraste adequado de cores
- Navegação por teclado
- ARIA labels e roles
- Estrutura semântica de headings

### 🔍 SEO
- Meta tags completas
- Open Graph para redes sociais
- Estrutura HTML5 semântica
- URLs amigáveis (âncoras)
- Performance otimizada

## 📁 Estrutura de Arquivos

```
Landing page - Leal/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── README.md           # Documentação (este arquivo)
├── favicon.png         # Ícone do site (adicionar)
│
└── assets/             # Pasta de recursos
    ├── teresina.jpg         # Foto do projeto em Teresina, PI
    ├── timon.jpg            # Foto do projeto em Timon, MA
    ├── grajau.jpg           # Foto do projeto em Grajaú, MA
    ├── agua-branca.jpg      # Foto do projeto em Água Branca, PI
    ├── amarante.jpg         # Foto do projeto em Amarante, PI
    └── agricolandia.jpg     # Foto do projeto em Agricolândia, PI
```

## 🛠️ Como Customizar

### 1. Cores

Edite as variáveis CSS no arquivo `styles.css` (linhas 12-24):

```css
:root {
    --primary-color: #0066cc;        /* Cor primária (azul) */
    --primary-dark: #004c99;         /* Azul escuro */
    --primary-light: #3385d6;        /* Azul claro */
    --secondary-color: #22c55e;      /* Verde (sustentabilidade) */
    --secondary-dark: #16a34a;       /* Verde escuro */
    --accent-color: #f59e0b;         /* Laranja/amarelo (sol) */
    --accent-dark: #d97706;          /* Laranja escuro */
    /* ... */
}
```

### 2. Informações da Empresa

#### Dados de Contato

Edite no arquivo `index.html`:

**Seção de Contato (linha ~560-590):**
```html
<strong>Telefone / WhatsApp</strong>
<p>(11) 98765-4321</p>

<strong>Localização</strong>
<p>Av. Paulista, 1000 - Sala 405<br>São Paulo, SP - CEP 01310-100</p>

<strong>Horário de Atendimento</strong>
<p>Segunda a Sexta: 8h às 18h<br>Sábado: 8h às 12h</p>
```

**Link WhatsApp - Seção de Contato (linha ~586):**
```html
<a href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20solar%20e%20solicitar%20um%20orçamento."
```

**WhatsApp Flutuante (linha ~945 - final do HTML):**
```html
<a href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20solar."
```

**Footer (linha ~900):**
```html
<span>Av. Paulista, 1000<br>São Paulo, SP</span>
<span>(11) 3456-7890</span>
<span>contato@lealengenharia.com.br</span>
```

> **Importante:** Substitua `5511987654321` pelo número real no formato internacional (código do país + DDD + número).
> **Formato:** 55 (Brasil) + DDD + Número (sem espaços, hífens ou parênteses)
> **Exemplo:** 5511987654321 = +55 11 98765-4321

#### Redes Sociais

Atualize os links nas seções (linhas ~820 e ~890):
```html
<a href="https://facebook.com/suapagina" target="_blank">
<a href="https://instagram.com/seuperfil" target="_blank">
<a href="https://linkedin.com/company/suaempresa" target="_blank>
<a href="https://youtube.com/@seucanal" target="_blank">
```

### 3. Logo

Atualmente usa um ícone de painel solar. Para adicionar logo personalizado:

**No HTML (linha ~52):**
```html
<a href="#" class="nav__logo">
    <img src="logo.png" alt="Leal Engenharia" style="height: 40px;">
    <span>Leal Engenharia</span>
</a>
```

**No CSS (adicione):**
```css
.nav__logo img {
    height: 40px;
    width: auto;
}
```

### 4. Estatísticas do Contador

Edite os valores no arquivo `index.html` (linha ~134):

```html
<h3 class="stats__number" data-target="168">0</h3>  <!-- Projetos -->
<h3 class="stats__number" data-target="4840">0</h3>  <!-- MWh -->
<h3 class="stats__number" data-target="117">0</h3>  <!-- Clientes -->
<h3 class="stats__number" data-target="365">0</h3>  <!-- CO₂ -->
```

**Valores Atuais (Leal Engenharia):**
- **168 projetos** realizados
- **4.840 MWh** gerados (aproximadamente 4,8 GWh)
- **117 clientes** satisfeitos
- **365 toneladas** de CO₂ evitadas

**Como foram calculados:**
- Potência média por sistema: 6 kWp
- Potência total: 168 × 6 = 1.008 kWp (1 MWp)
- Geração anual (Nordeste): 1.600 kWh/kWp/ano
- Tempo médio de operação: 3 anos
- Fator de emissão: 0,075 kg CO₂/kWh (rede brasileira)

### 5. Imagens

#### Fotos dos Projetos

As fotos dos projetos estão na pasta `assets/` com os seguintes nomes:

```
assets/
├── teresina.jpg         (Teresina, PI)
├── timon.jpg            (Timon, MA)
├── grajau.jpg           (Grajaú, MA)
├── agua-branca.jpg      (Água Branca, PI)
├── amarante.jpg         (Amarante, PI)
└── agricolandia.jpg     (Agricolândia, PI)
```

**Para adicionar suas fotos:**
1. Crie a pasta `assets/` na raiz do projeto (se ainda não existir)
2. Adicione as fotos com os nomes exatos listados acima
3. As imagens já estão referenciadas no HTML (linhas ~385-436)

#### Outras Imagens (Opcional)

Você pode substituir as imagens de exemplo do Unsplash:

**Hero (linha ~122):**
```html
<img src="assets/hero-paineis.jpg" alt="Painéis solares">
```

**Sobre (linha ~222):**
```html
<img src="assets/equipe.jpg" alt="Equipe Leal Engenharia">
```

#### Otimização de Imagens

**Tamanhos recomendados:**
- Hero: 1200x800px
- Projetos: 600x400px (ou 800x600px)
- Sobre: 800x600px

**Formatos:**
- Use JPG para fotos (menor tamanho)
- Use PNG para logos e gráficos
- Considere WebP para melhor compressão

**Ferramentas de compressão:**
- [TinyPNG](https://tinypng.com) - Comprime JPG e PNG
- [Squoosh](https://squoosh.app) - Ferramenta do Google
- [ImageOptim](https://imageoptim.com) - Para Mac

### 6. Textos e Conteúdo

Todos os textos estão no arquivo `index.html`. Principais seções:

- **Hero** (linha ~100): Título e descrição principal
- **Sobre** (linha ~240): História e diferenciais
- **Serviços** (linha ~275): Descrição dos serviços
- **Benefícios** (linha ~370): Vantagens da energia solar
- **FAQ** (linha ~560): Perguntas frequentes
- **Depoimentos** (linha ~530): Avaliações de clientes

### 7. Calculadora de Economia

Para ajustar a porcentagem de economia, edite no arquivo `script.js` (linha ~126):

```javascript
const savingsRate = 0.80;  // 80% de economia (ajuste conforme necessário)
```

### 8. Modal de Orçamento

O modal de orçamento permite que os visitantes solicitem um orçamento personalizado. Para integrar com backend ou WhatsApp:

**Opção 1: Redirecionar para WhatsApp**

No arquivo `script.js`, substitua a função de submit do modal (linha ~284):

```javascript
if (isValid) {
    // Redirecionar para WhatsApp com dados preenchidos
    const name = document.getElementById('quote-name').value;
    const type = document.getElementById('quote-type').value;
    const bill = document.getElementById('quote-bill').value;
    const city = document.getElementById('quote-city').value;

    const message = `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
                   `Nome: ${name}%0A` +
                   `Tipo: ${type}%0A` +
                   `Conta de luz: R$ ${bill}%0A` +
                   `Cidade: ${city}`;

    window.open(`https://wa.me/5511987654321?text=${message}`, '_blank');
    closeModal();
}
```

**Opção 2: Integrar com API**

```javascript
if (isValid) {
    fetch('/api/orcamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.getElementById('quote-name').value,
            email: document.getElementById('quote-email').value,
            phone: document.getElementById('quote-phone').value,
            type: document.getElementById('quote-type').value,
            bill: document.getElementById('quote-bill').value,
            city: document.getElementById('quote-city').value
        })
    })
    .then(response => response.json())
    .then(data => {
        successDiv.style.display = 'flex';
        setTimeout(() => { closeModal(); }, 3000);
    });
}
```

**Opção 3: EmailJS (sem backend)**

Use o serviço EmailJS (https://www.emailjs.com):
1. Crie conta no EmailJS
2. Configure template de e-mail
3. Adicione o SDK no HTML
4. Chame EmailJS no submit do formulário

### 9. Favicon

Adicione um arquivo `favicon.png` na raiz do projeto (32x32 ou 64x64 pixels).

Para criar:
1. Use sua logo
2. Redimensione para 32x32px ou 64x64px
3. Converta para PNG ou ICO
4. Salve como `favicon.png`

## 🌐 Como Publicar

### Opção 1: GitHub Pages (Grátis)

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Seu site estará em: `https://seuusuario.github.io/nome-repositorio`

### Opção 2: Netlify (Grátis)

1. Crie conta no [Netlify](https://netlify.com)
2. Arraste a pasta do projeto
3. Site publicado automaticamente
4. Configure domínio personalizado (opcional)

### Opção 3: Vercel (Grátis)

1. Crie conta no [Vercel](https://vercel.com)
2. Importe o projeto
3. Deploy automático
4. SSL e CDN inclusos

### Opção 4: Hospedagem Tradicional

1. Contrate uma hospedagem (Hostinger, HostGator, etc.)
2. Use FTP para fazer upload dos arquivos
3. Configure domínio no painel de controle

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:

- 📱 **Mobile:** < 576px
- 📱 **Tablet:** 576px - 968px
- 💻 **Desktop:** > 968px
- 🖥️ **Wide:** > 1200px

### Teste em Diferentes Dispositivos

Use as ferramentas de desenvolvedor do navegador:
- **Chrome/Edge:** F12 > Toggle device toolbar
- **Firefox:** F12 > Responsive Design Mode

## ⚡ Performance

### Checklist de Otimização

- [x] Lazy loading de imagens
- [x] CSS minificado (para produção)
- [x] JavaScript otimizado
- [x] Fontes com preconnect
- [x] Eventos de scroll com debounce
- [ ] Comprimir imagens
- [ ] Minificar HTML/CSS/JS para produção
- [ ] Adicionar Service Worker (PWA)

### Como Minificar para Produção

**CSS:**
```bash
# Use CSS Minifier online ou:
npm install -g cssnano-cli
cssnano styles.css styles.min.css
```

**JavaScript:**
```bash
# Use JSCompress online ou:
npm install -g terser
terser script.js -o script.min.js
```

Depois, atualize os links no HTML:
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

## 🔒 SEO e Meta Tags

### Atualize as Meta Tags

No arquivo `index.html` (linhas 5-22):

```html
<meta name="description" content="Sua descrição personalizada">
<meta name="keywords" content="suas, palavras-chave, aqui">

<!-- Open Graph -->
<meta property="og:url" content="https://seusite.com.br/">
<meta property="og:title" content="Leal Engenharia - Energia Solar">
<meta property="og:description" content="Sua descrição">
<meta property="og:image" content="https://seusite.com.br/images/og-image.jpg">
```

### Crie uma Imagem Open Graph

- Tamanho: 1200x630px
- Formato: JPG ou PNG
- Adicione logo e texto chamativo
- Salve como `og-image.jpg`

## 🧪 Teste Antes de Publicar

### Checklist de Testes

- [ ] Todos os links funcionam
- [ ] Formulários validam corretamente
- [ ] Calculadora funciona
- [ ] FAQ abre/fecha
- [ ] Modal abre/fecha
- [ ] WhatsApp abre com mensagem correta
- [ ] Botão voltar ao topo funciona
- [ ] Menu mobile abre/fecha
- [ ] Navegação suave funciona
- [ ] Imagens carregam (lazy loading)
- [ ] Responsividade em diferentes telas
- [ ] Sem erros no console

### Ferramentas de Teste

- **Lighthouse:** (Chrome DevTools) - Performance, SEO, Acessibilidade
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **W3C Validator:** https://validator.w3.org

## 🆘 Suporte e Dúvidas

### Problemas Comuns

**1. Menu mobile não abre:**
- Verifique se o `script.js` está carregando
- Confira o console do navegador (F12)

**2. Imagens não carregam:**
- Verifique os caminhos das imagens
- Certifique-se de que os arquivos existem

**3. WhatsApp não abre corretamente:**
- Verifique se o número está no formato internacional correto
- Teste o link diretamente no navegador
- Certifique-se de que o número existe e aceita mensagens

**4. Contador não anima:**
- Verifique se está rolando até a seção
- Confira valores `data-target` no HTML

**5. Modal não abre:**
- Verifique se não há erros JavaScript no console
- Confirme que a função `openModal()` está definida

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins comerciais e pessoais.

## 🎉 Próximos Passos

Sugestões de melhorias:

1. **Integração API do WhatsApp Business:** Chatbot automatizado
2. **Blog:** Adicionar seção de artigos sobre energia solar
3. **Vídeos:** Incorporar vídeos explicativos do YouTube
4. **Certificações:** Mostrar certificados e prêmios
5. **Parceiros:** Logos de fornecedores e parceiros
6. **Simulador Avançado:** Cálculo detalhado com API de geolocalização
7. **Google Analytics:** Rastreamento de conversões
8. **Pixel do Facebook:** Remarketing
9. **PWA:** Transformar em Progressive Web App
10. **Sistema de Agendamento:** Integração com Google Calendar

## 📝 Notas Importantes

### Alterações Feitas na Versão Simplificada

Esta versão da landing page foi simplificada removendo:
- ❌ Seção de depoimentos de clientes
- ❌ Serviço Industrial (mantendo apenas Residencial e Comercial)
- ❌ Formulário de contato tradicional (substituído por WhatsApp)
- ❌ Algumas features da seção "Sobre" (certificação internacional, suporte dedicado)

**Foco principal:** Conversão direta via WhatsApp para melhor taxa de resposta e atendimento mais ágil.

### Vantagens do Contato via WhatsApp

1. **Maior Taxa de Resposta:** Pessoas preferem WhatsApp a formulários
2. **Atendimento em Tempo Real:** Conversação instantânea
3. **Menos Fricção:** Não precisa preencher formulário completo
4. **Mobile-Friendly:** Abre direto no app do celular
5. **Personalização:** Conversa mais humanizada desde o início

---

**Desenvolvido para Leal Engenharia** 🌞

*Transformando luz solar em economia e sustentabilidade.*

