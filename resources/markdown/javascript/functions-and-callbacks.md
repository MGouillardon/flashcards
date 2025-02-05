# Function & callbacks

Les functions servent à exécuter opérations de manière répéter.
=> DRY : Don't Repeat Yourself

=> On peut **généraliser**

```js
function squareNum() {
  return num * num
}
// Au lieu de faire avec des chiffres plain text
```

## High Order Functions

Les fonctions d'ordre supérieur permettent de passer des fonctions en paramètre d'autre fonctions.

```js
function copyArrayAndManipulate(array, instructions) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]))
  }
  return output
}

function multiplyBy2(input) {
  return input * 2
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2)
```

Ici copyArrayAndManipulate est une high order function et multiplyBy2 est une callback

## Analyse Détaillée des Fonctions d'Ordre Supérieur en JavaScript

## 1. Définition initiale dans la mémoire globale

```javascript
// Global Memory (Memory Heap)
{
    copyArrayAndManipulate: 𝑓𝑛(array, instructions) { ... },
    multiplyBy2: 𝑓𝑛(input) { ... },
    result: undefined
}
```

## 2. Création du contexte d'exécution de copyArrayAndManipulate

```javascript
// Execution Context de copyArrayAndManipulate
{
    this: window,
    array: [1, 2, 3],
    instructions: 𝑓𝑛 multiplyBy2,
    output: [],
    i: 0
}
```

## 3. Déroulement de l'exécution pour chaque itération

### Première itération (i = 0)

```javascript
// Call Stack
[
    multiplyBy2(1)           // Contexte en cours
    copyArrayAndManipulate() // Contexte parent
]

// Execution Context de multiplyBy2
{
    this: window,
    input: 1,
    return value: 2
}
```

### Deuxième itération (i = 1)

```javascript
// Call Stack
[
    multiplyBy2(2)           // Contexte en cours
    copyArrayAndManipulate() // Contexte parent
]

// Execution Context de multiplyBy2
{
    this: window,
    input: 2,
    return value: 4
}
```

### Troisième itération (i = 2)

```javascript
// Call Stack
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

## 4. État final

```javascript
// Global Memory
{
    copyArrayAndManipulate: 𝑓𝑛,
    multiplyBy2: 𝑓𝑛,
    result: [2, 4, 6]
}
```

## 5. Concepts clés

### Closure

- La fonction `multiplyBy2` maintient l'accès à son scope parent
- Elle peut être passée comme argument tout en conservant son contexte

### Pile d'appels (Call Stack)

- Fonctionne selon le principe LIFO (Last In, First Out)
- Chaque appel de fonction crée un nouveau contexte d'exécution
- Les contextes sont empilés puis dépilés au fur et à mesure de l'exécution

### Heap (Tas)

- Stocke les références des objets et tableaux
- Géré par le Garbage Collector
- Contient les closures et les variables qui survivent à leur contexte d'exécution

### Optimisations possibles

```javascript
// Version avec reduce
const copyArrayAndManipulate = (array, fn) => array.reduce((acc, curr) => [...acc, fn(curr)], [])

// Version avec map
const copyArrayAndManipulate = (array, fn) => array.map(fn)
```

