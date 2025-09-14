# Kiki — Site vitrine (React + Vite + Tailwind)

Identité : orange `#e66303` (brand) et jaune `#fed537` (sun).  
Slogan : **Morning coffee • Lunch • Cocktails & Tapas**.

## Installation

1. **Prérequis** : Node.js 18+ et npm.
2. Dézippez puis ouvrez le dossier dans votre terminal :
   ```bash
   cd kiki_rouen
   npm install
   npm run dev
   ```
3. Build de prod :
   ```bash
   npm run build
   npm run preview
   ```

## Structure

```
kiki-site/
  public/
    images/              # Visuels
  src/
    components/          # UI réutilisable
    data/                # Contenus modifiables (menu, horaires, site)
    pages/               # Pages : Home, Carte, Avis, Infos
    utils/               # isOpenNow etc.
```

## Où modifier le contenu ?

- `src/data/site.js` : nom, slogan, adresse, services.
- `src/data/hours.js` : horaires.
- `src/data/reviews.js` : avis clients.
- `src/data/menu.js` : toute la carte (Breakfast, Lunch, Tapas, Cocktails, Mocktails, Softs, Desserts).

## Images

Les images sont dans `public/images/`. Vous pouvez les remplacer par vos visuels (même nom de fichier) pour changer l’apparence.

## Personnalisation rapide

- Couleurs de marque dans `tailwind.config.js` (`brand` et `sun`).
- Héros : changez l’image dans `src/components/Hero.jsx` (parasol.png).
- Boutons/typographies : directement avec les classes Tailwind.

## Déploiement

- **Vercel**, **Netlify** ou **Cloudflare Pages** : importer le repo, build command `npm run build` et output `dist/`.
- **Static hosting** : `npm run build` puis servir le dossier `dist`.

Bon dev ! ☀️
