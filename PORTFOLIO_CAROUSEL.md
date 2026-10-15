# 🎨 Portfólio 3D Carousel - Documentação

## Visão Geral

Seção de portfólio implementada com carrossel 3D interativo usando perspectiva CSS e transforms, criando um efeito visual de profundidade similar a cards de jogos TCG.

## 📍 Localização no Projeto

- **Componente:** `src/components/Portfolio.tsx`
- **Posição na página:** Entre as seções "SocialProof" e "FAQ"
- **Estilos:** `src/index.css` (classes `.portfolio-card` e `.portfolio-carousel`)

## 🎯 Funcionalidades Implementadas

### 1. Efeito Visual 3D com Perspectiva

```css
perspective: 2000px;
transform-style: preserve-3d;
```

**Comportamento dos cards:**
- **Card ativo (central):**
  - Escala: 1.0
  - Opacidade: 1
  - Rotação Y: 0°
  - Z-index: 10
  
- **Cards laterais próximos (±1):**
  - Escala: 0.85 (0.9 no mobile)
  - Opacidade: 0.6 (0.7 no mobile)
  - Rotação Y: ±15° (±10° no mobile)
  - Z-index: 5
  
- **Cards distantes (±2 ou mais):**
  - Escala: 0.7 (0.75 no mobile)
  - Opacidade: 0.3 (0.4 no mobile)
  - Rotação Y: ±25° (±20° no mobile)
  - Z-index: 1

### 2. Navegação

#### Setas Laterais
- Botões circulares com glassmorphism
- Posicionados nas laterais do carrossel
- Acessíveis via teclado (← →)

#### Indicadores (Dots)
- 6 dots correspondentes aos 6 projetos
- Dot ativo com largura expandida (32px vs 8px)
- Cor do dot ativo: `var(--color-secondary)`

#### Swipe/Drag
- Suporte a mouse drag no desktop
- Suporte a touch swipe no mobile
- Threshold de 100px (desktop) e 50px (mobile) para mudança de slide

#### Autoplay
- Intervalo: 5 segundos
- Pausa automática no hover
- Pausa durante drag/swipe

### 3. Efeitos Hover

```css
.portfolio-card:hover {
  transform: translateY(-10px) !important;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6) !important;
}
```

**Efeito de borda com gradiente animado:**
- Borda com gradiente (laranja → verde → laranja)
- Animação infinita de 2s
- Opacidade 0.5 no hover

### 4. Responsividade

#### Desktop (≥ 1024px)
- 3 cards visíveis simultaneamente
- Espaçamento: 320px entre cards
- Cards laterais: 400px do centro

#### Tablet (768px - 1023px)
- 2 cards visíveis simultaneamente
- Espaçamento: 240px entre cards
- Cards laterais: 300px do centro

#### Mobile (< 768px)
- 2 cards visíveis simultaneamente
- Espaçamento: 160px entre cards
- Cards laterais: 200px do centro
- Rotação reduzida para melhor visualização

### 5. Acessibilidade

- **ARIA labels:** Todos os botões e cards têm labels descritivos
- **Navegação por teclado:** Setas ← → para navegar
- **Focus states:** Visíveis e acessíveis
- **Roles semânticos:** `button`, `article`
- **aria-current:** Indica card ativo nos dots

### 6. Performance

```css
will-change: transform, opacity;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
```

- Uso de `transform` em vez de `top/left`
- `will-change` para otimização de renderização
- `backface-visibility: hidden` para evitar flickering
- Imagens com `loading="lazy"`

## 🎨 Estilo Visual

### Background dos Cards
```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
border: 1px solid rgba(255,255,255,0.1);
box-shadow: 0 20px 60px rgba(0,0,0,0.5);
```

### Título com Gradiente
```css
background: linear-gradient(135deg, #fff 0%, #b7e4c7 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Botão CTA
```css
background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.2);
```

## 📦 Estrutura de Cada Card

```tsx
<article className="portfolio-card">
  {/* Imagem do projeto (16:9) */}
  <div className="aspect-video">
    <img src="..." alt="..." />
    <div className="overlay-gradient" />
  </div>
  
  {/* Conteúdo */}
  <div className="content">
    <h3>Título do Projeto</h3>
    <p>Descrição curta (max 3 linhas)</p>
    <a href="...">Ver Projeto →</a>
  </div>
  
  {/* Borda decorativa */}
  <div className="decorative-border" />
</article>
```

## 🔄 Lógica do Carrossel

### Função `getCardStyle(index)`

Calcula a posição e estilo de cada card baseado na distância do card ativo:

```typescript
const diff = index - activeIndex;
const absDiff = Math.abs(diff);

// Card ativo
if (diff === 0) {
  translateX = 0;
  scale = 1;
  opacity = 1;
  rotateY = 0;
}
// Cards laterais
else if (absDiff === 1) {
  translateX = diff * spacing;
  scale = 0.85;
  opacity = 0.6;
  rotateY = diff * 15;
}
// Cards distantes
else {
  translateX = diff * farSpacing;
  scale = 0.7;
  opacity = 0.3;
  rotateY = diff * 25;
}
```

### Transição Suave

```css
transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

Curva de easing personalizada para movimento natural e fluido.

## 📱 Comportamento Mobile

- **Touch action:** `pan-y` (permite scroll vertical, bloqueia horizontal)
- **User select:** Desabilitado para evitar seleção de texto durante drag
- **Threshold reduzido:** 50px para mudança de slide (mais sensível)
- **Rotação reduzida:** 10° em vez de 15° para melhor visualização
- **Opacidade aumentada:** Cards laterais mais visíveis

## 🎬 Animações

### Entrada dos Cards
- Transição de 500ms com easing personalizado
- Sem animação durante drag (transição desabilitada)

### Hover
- `translateY(-10px)` para elevação
- Aumento de sombra
- Borda com gradiente animado (2s loop)

### Autoplay
- Intervalo: 5000ms
- Loop infinito
- Pausa no hover/drag

## 🛠️ Customização

### Cores
Edite as variáveis CSS em `src/index.css`:
```css
--color-secondary: #F77F00;
--color-secondary-light: #FCBF49;
--color-primary: #2D6A4F;
```

### Velocidade de Transição
Ajuste em `getCardStyle()`:
```typescript
transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
```

### Intervalo do Autoplay
Ajuste no `useEffect`:
```typescript
autoPlayRef.current = setInterval(() => {
  setActiveIndex((prev) => (prev + 1) % projects.length);
}, 5000); // Altere aqui (em ms)
```

### Espaçamento dos Cards
Ajuste em `getCardStyle()`:
```typescript
const spacing = isMobile ? 160 : isTablet ? 240 : 320;
const farSpacing = isMobile ? 200 : isTablet ? 300 : 400;
```

## 📊 Dados dos Projetos

Localização: `src/components/Portfolio.tsx`

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição curta do projeto',
    image: 'URL da imagem',
    link: 'Link para o projeto',
  },
  // ... mais projetos
];
```

**Imagens usadas:** Unsplash (placeholders)
- Pizzaria: `photo-1565299624946-b28f40a0ae38`
- Studio: `photo-1560066984-138dadb4c035`
- Auto Peças: `photo-1486262715619-67b85e0b08d3`
- Padaria: `photo-1509440159596-0249088772ff`
- Barbearia: `photo-1585747860715-2ba37e788b70`
- Pet Shop: `photo-1450778869180-41d0601e046e`

## ✅ Checklist de Implementação

- [x] Carrossel 3D com perspectiva
- [x] Navegação por setas
- [x] Indicadores (dots)
- [x] Swipe/drag no mobile
- [x] Autoplay com pausa no hover
- [x] Loop infinito
- [x] Efeito hover com elevação
- [x] Borda com gradiente animado
- [x] Responsivo (mobile, tablet, desktop)
- [x] Acessível (ARIA, teclado, focus)
- [x] Performance otimizada
- [x] Semântica HTML5
- [x] Comentários no código

## 🚀 Próximos Passos (Opcional)

1. **Lazy loading de imagens:** Implementar com Intersection Observer
2. **Preload de imagens:** Carregar próximas imagens antes de exibir
3. **Animações de entrada:** GSAP ScrollTrigger para entrada da seção
4. **Modal de detalhes:** Abrir modal com mais informações ao clicar
5. **Filtros por categoria:** Adicionar filtros por tipo de projeto
6. **Lightbox de imagens:** Visualização em tela cheia das imagens

## 📝 Notas Técnicas

- **Sem dependências externas:** Toda a lógica é implementada com React hooks e CSS puro
- **TypeScript:** Tipagem completa para segurança de tipos
- **React 18:** Uso de hooks modernos (useState, useEffect, useRef, useCallback)
- **CSS Variables:** Fácil customização via variáveis CSS
- **Mobile-first:** Design pensado primeiro para mobile

## 🔗 Referências

- [CSS Perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [React Hooks](https://react.dev/reference/react)
- [ARIA Patterns](https://www.w3.org/WAI/ARIA/apg/)
