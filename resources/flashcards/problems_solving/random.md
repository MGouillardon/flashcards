# JavaScript Algorithmic Patterns - Flashcards

## String Manipulation

### Q: Quelles sont les techniques fondamentales pour manipuler des chaînes en JavaScript ?

A: La manipulation de chaînes en JavaScript utilise plusieurs patterns clés :

1. Concaténation avec Template Literals
2. Accumulation de résultats
3. Formatage de sortie

```javascript
// Pattern d'accumulation avec template literals
function generateOutput(number) {
  let result = ''
  for (let i = 1; i <= 10; i++) {
    result += `${number} x ${i} = ${number * i}\n`
  }
  return result.trim()
}
```

Tags: #strings #templates #accumulation #formatting

### Q: Comment gérer les patterns visuels et les motifs en JavaScript ?

A: La création de motifs visuels implique plusieurs concepts :

1. Boucles imbriquées pour les motifs 2D
2. Accumulation de caractères
3. Gestion des sauts de ligne
4. Alignement et espacement

```javascript
// Pattern de motif visuel avec boucles imbriquées
function createPattern(height) {
  let pattern = ''
  for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      pattern += '*'
    }
    pattern += '\n'
  }
  return pattern.trim()
}
```

Tags: #patterns #loops #visual #nested

## Data Processing

### Q: Quelles sont les principales techniques de transformation de données en JavaScript ?

A: Le traitement des données utilise plusieurs approches fonctionnelles :

1. Map pour les transformations
2. Reduce pour les agrégations
3. Object.entries/values pour les objets
4. Spread operator pour la fusion

```javascript
// Pattern de transformation avec map
const extractData = (users) => users.map((user) => user.name)

// Pattern d'agrégation avec reduce
const calculateSum = (cart) => Object.values(cart).reduce((sum, price) => sum + price, 0)

// Pattern de fusion avec spread
const merge = (obj1, obj2) => ({ ...obj1, ...obj2 })
```

Tags: #map #reduce #spread #functional

### Q: Comment analyser des séquences et trouver des patterns dans les données ?

A: L'analyse de séquences implique plusieurs techniques :

1. Suivi d'état courant vs maximum
2. Fenêtre glissante
3. Indices de début/fin
4. Extraction de sous-séquences

```javascript
function analyzeSequence(numbers) {
  let maxLength = 0
  let currentLength = 1
  let maxStartIndex = 0

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      currentLength++
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength
        maxStartIndex = i - currentLength + 1
      }
      currentLength = 1
    }
  }

  return {
    length: maxLength,
    startIndex: maxStartIndex,
    sequence: numbers.slice(maxStartIndex, maxStartIndex + maxLength),
  }
}
```

Tags: #sequences #analysis #state #slicing
