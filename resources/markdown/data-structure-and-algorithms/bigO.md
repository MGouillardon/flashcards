# La Notation Big O

## 1. Définition et Concept

La notation Big O décrit la complexité d'un algorithme en fonction de la taille de son input (n). Elle permet d'analyser et de comparer l'efficacité des algorithmes.

## 2. Principes Fondamentaux

- On analyse le comportement asymptotique (quand n → ∞)
- On ignore les constantes (O(2n) = O(n))
- On considère généralement le pire cas
- S'applique au temps ET à l'espace (mémoire)

## 3. Types de Complexité Courants

### O(1) - Complexité Constante

```javascript
function getFirst(array) {
  return array[0]
}
```

- Temps d'exécution constant
- Ne dépend pas de la taille de l'input
- Exemples : accès à un index, opérations sur une pile

### O(log n) - Complexité Logarithmique

```javascript
function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target) return mid
    if (array[mid] < target) left = mid + 1
    else right = mid - 1
  }
  return -1
}
```

- Divise le problème par 2 à chaque étape
- Très efficace pour de grandes données
- Exemples : recherche binaire, certains arbres équilibrés

### O(n) - Complexité Linéaire

```javascript
function sum(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}
```

- Croissance proportionnelle à l'input
- Une seule boucle sur les données
- Exemples : recherche séquentielle, parcours de tableau

### O(n log n) - Complexité Linéarithmique

- Combinaison de linéaire et logarithmique
- Caractéristique des bons algorithmes de tri
- Exemples : Merge Sort, Quick Sort

### O(n²) - Complexité Quadratique

```javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
}
```

- Boucles imbriquées
- Croissance rapide avec la taille des données
- Exemples : tri à bulles, comparaison par paires

## 4. Simplification de la Notation

- On ne garde que le terme dominant
- O(n² + n) devient O(n²)
- O(2n) devient O(n)
- O(n³ + 100n² + 5) devient O(n³)

## 5. Analyse Pratique

### Comment Analyser un Algorithme

1. Identifier les boucles et leur imbrication
2. Compter les opérations basiques
3. Identifier le comportement dominant
4. Simplifier l'expression

### Cas Particuliers

- Récursivité : compter les appels récursifs
- Structures de données : considérer les opérations sous-jacentes
- Algorithmes composés : analyser chaque partie

## 6. Conseils d'Optimisation

1. Choisir les structures de données appropriées
2. Éviter les boucles imbriquées quand possible
3. Utiliser des algorithmes divisés par 2 (log n) quand possible
4. Faire attention aux copies de données inutiles

## 7. Impact sur la Performance Réelle

- La notation Big O donne une indication théorique
- Pour de petits ensembles, les constantes peuvent être importantes
- Toujours mesurer les performances dans le contexte réel
- Considérer les contraintes mémoire et CPU spécifiques

## 8. Représentation

O(1) → constant
O(log n) → logarithmique
O(n) → linéaire
O(n log n) → linéarithmique
O(n²) → quadratique
O(2^n) → exponentiel

Note sur la croissance :

- O(1) reste plat
- O(log n) croît très lentement
- O(n) croît proportionnellement à l'entrée
- O(n log n) croît un peu plus vite que linéaire
- O(n²) croît rapidement
- O(2^n) croît extrêmement rapidement
