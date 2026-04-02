# 📁 Assets

Esta pasta contém os recursos visuais do aplicativo.

## Ícones Necessários

O Expo requer os seguintes arquivos de ícone. Você pode usar os placeholders ou substituir por seus próprios:

### Arquivos Requeridos

- **icon.png** (1024x1024px) - Ícone principal do app
- **adaptive-icon.png** (1024x1024px) - Ícone adaptativo Android
- **splash.png** (1284x2778px) - Tela de splash
- **favicon.png** (48x48px) - Favicon para web

## Como Criar Seus Próprios Ícones

### Opção 1: Design Manual
1. Crie imagens com as dimensões especificadas acima
2. Use fundo transparente (PNG)
3. Substitua os arquivos nesta pasta

### Opção 2: Ferramentas Online
- [App Icon Generator](https://www.appicon.co/)
- [Icon Kitchen](https://icon.kitchen/)
- [Figma](https://www.figma.com/)

### Opção 3: Usar Placeholder
Os placeholders atuais usam:
- Fundo: Gradient verde (#10b981)
- Ícone: Haltere/Fitness
- Bom para testes e desenvolvimento

## Cores do Brand

Para manter consistência visual:

```
Verde Principal: #10b981
Ciano Secundário: #06b6d4
Fundo Escuro: #0f172a
Card: #1e293b
```

## Substituindo Assets

1. Prepare suas imagens com as dimensões corretas
2. Salve na pasta `/assets`
3. Mantenha os nomes dos arquivos
4. Execute `expo start --clear` para limpar cache

## Nota

O Expo Go usa os ícones padrão do Expo durante desenvolvimento. Os ícones customizados aparecem apenas no build de produção (`eas build`).
