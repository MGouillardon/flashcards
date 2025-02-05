# JavaScript Higher-Order Functions - Flashcards

## Functions & Callbacks

### Q: Comment fonctionne une fonction d'ordre supérieur (Higher-Order Function) en JavaScript ?

A: Une fonction d'ordre supérieur est une fonction qui :

- Prend une autre fonction en paramètre (callback)
- Et/ou retourne une fonction
- Permet une plus grande abstraction et réutilisation du code

```javascript
// Call Stack lors de l'exécution
[
    multiplyBy2(3)           // Contexte en cours
    copyArrayAndManipulate() // Contexte parent
]

// Execution Context de multiplyBy2
{
    this: window,
    input: 3,
    return value: 6
}
```

Tags: #higherorder #functions #callback #javascript

### Q: Quels sont les différents états d'exécution dans une fonction d'ordre supérieur ?

A: L'exécution passe par plusieurs états :

1. État Initial :

   - Déclaration des fonctions (copyArrayAndManipulate, multiplyBy2)
   - Préparation des callbacks

2. État Final :
   - Résultat du traitement stocké en mémoire
   - Application de la transformation sur chaque élément

```javascript
// Global Memory - État final
{
    copyArrayAndManipulate: 𝑓𝑛,
    multiplyBy2: 𝑓𝑛,
    result: [2, 4, 6]
}
```

Tags: #execution #state #memory #callback

### Q: Quelles sont les optimisations possibles pour les fonctions d'ordre supérieur ?

A: Plusieurs approches d'optimisation sont possibles :

1. Utilisation de map :

   - Plus déclaratif
   - Meilleure lisibilité
   - Optimisé par le moteur JS

2. Utilisation de reduce :
   - Plus flexible
   - Permet des transformations complexes

```javascript
// Version avec reduce
const copyArrayAndManipulate = (array, fn) => array.reduce((acc, curr) => [...acc, fn(curr)], [])

// Version avec map
const copyArrayAndManipulate = (array, fn) => array.map(fn)
```

Tags: #optimization #map #reduce #functional

### Q: Comment les Closures interviennent dans les fonctions d'ordre supérieur ?

A: Les Closures jouent un rôle crucial :

1. Avantages :

   - La fonction callback maintient l'accès à son scope parent
   - Peut être passée comme argument en conservant son contexte
   - Permet la mémorisation des variables

2. Utilisation dans la pile d'appels :
   - Chaque appel crée un nouveau contexte
   - Les contextes sont empilés/dépilés (LIFO)
   - La closure conserve son scope même après l'exécution

```javascript
function createMultiplier(factor) {
  // La closure capture 'factor'
  return function (x) {
    return x * factor
  }
}

const double = createMultiplier(2)
const result = double(3) // 6
```

Tags: #closure #scope #context #callback
