# Web Components - Flashcards

## Concepts Fondamentaux

### Q: Qu'est-ce qu'un Web Component et quels sont ses principaux avantages ?

A: Un Web Component est un standard web permettant de créer des éléments HTML réutilisables et encapsulés :

1. Réutilisabilité à travers différents projets
2. Encapsulation complète des styles et du comportement
3. Compatibilité avec tous les frameworks
4. Utilisation des standards web natifs

```js
class MyComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}
customElements.define('my-component', MyComponent)
```

Tags: #webcomponents #frontend #standards #javascript

### Q: Quelles sont les technologies fondamentales des Web Components ?

A: Les Web Components reposent sur quatre technologies principales :

1. Custom Elements : Création de balises HTML personnalisées
2. Shadow DOM : Encapsulation du DOM et des styles
3. HTML Templates : Définition de contenu réutilisable
4. ES Modules : Organisation et chargement du code

```js
// Custom Element
class UserCard extends HTMLElement {}

// Shadow DOM
this.attachShadow({ mode: 'open' })

// Template
const template = document.createElement('template')
template.innerHTML = `...`
```

Tags: #customelements #shadowdom #templates #modules

## Cycle de Vie

### Q: Quels sont les callbacks du cycle de vie d'un Web Component ?

A: Les Web Components ont quatre callbacks principaux :

1. constructor : Initialisation de base
2. connectedCallback : Montage dans le DOM
3. disconnectedCallback : Démontage du DOM
4. attributeChangedCallback : Changement d'attributs

```js
class UserCard extends HTMLElement {
  constructor() { super(); }
  connectedCallback() { /* Montage */ }
  disconnectedCallback() { /* Nettoyage */ }
  attributeChangedCallback(name, old, new) { /* Update */ }
}
```

Tags: #lifecycle #callbacks #webcomponents

## Shadow DOM

### Q: Comment fonctionne le Shadow DOM et quelle est son utilité ?

A: Le Shadow DOM fournit l'encapsulation pour les Web Components :

1. Isole le DOM interne
2. Encapsule les styles CSS
3. Évite les conflits avec le DOM principal
4. Permet une composition sécurisée

```js
class MyComponent extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <style>
        /* Styles isolés */
      </style>
      <div>Contenu isolé</div>
    `
  }
}
```

Tags: #shadowdom #encapsulation #styles

## Slots et Templates

### Q: Comment fonctionnent les slots dans les Web Components ?

A: Les slots permettent l'injection de contenu dans un Web Component :

1. Définition de placeholders nommés
2. Contenu par défaut possible
3. Configuration flexible du composant
4. Composition dynamique

```js
// Dans le template
<slot name="title">Titre par défaut</slot>

// Utilisation
<my-component>
  <span slot="title">Mon titre</span>
</my-component>
```

Tags: #slots #composition #template

## Communication

### Q: Comment les Web Components communiquent-ils avec l'extérieur ?

A: La communication se fait via plusieurs mécanismes :

1. Attributs et propriétés
2. Événements personnalisés
3. Méthodes publiques
4. Slots

```js
// Événements
this.dispatchEvent(new CustomEvent('user-selected', {
  bubbles: true,
  composed: true,
  detail: { userId: 1 }
}));

// Attributs
static get observedAttributes() {
  return ['status', 'theme'];
}
```

Tags: #events #communication #api

## Styles et Thèmes

### Q: Comment gérer les styles et les thèmes dans les Web Components ?

A: Les styles peuvent être gérés de plusieurs façons :

1. Variables CSS (Custom Properties)
2. Parts et ::slotted
3. :host selector
4. Thèmes dynamiques

```css
:host {
  --primary-color: blue;
}

::slotted(img) {
  border-radius: 50%;
}

[part='container'] {
  background: var(--primary-color);
}
```

Tags: #styles #theming #css
