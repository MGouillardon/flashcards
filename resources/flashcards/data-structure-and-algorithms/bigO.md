# Big O Notation - Flashcards

## Concepts de Base

### Q: Qu'est-ce que la notation Big O et à quoi sert-elle ?

A: La notation Big O est une méthode pour décrire la complexité d'un algorithme en fonction de la taille de son input (n). Elle permet d'analyser et de comparer l'efficacité des algorithmes en termes de temps d'exécution et d'espace mémoire.
Tags: #bigO #complexity #fundamental

### Q: Quels sont les principes fondamentaux de la notation Big O ?

A: Les principes fondamentaux sont :

1. L'analyse du comportement asymptotique (n → ∞)
2. L'ignorance des constantes (O(2n) = O(n))
3. La considération du pire cas
4. L'application au temps et à l'espace
   Tags: #bigO #principles #complexity

### Q: Pourquoi ignore-t-on les constantes dans la notation Big O ?

A: On ignore les constantes car :

1. Big O s'intéresse au comportement à grande échelle
2. Les constantes deviennent négligeables quand n est très grand
3. Cela simplifie la comparaison entre algorithmes
   Exemple : O(2n) et O(n) sont équivalents car la différence est constante
   Tags: #bigO #constants #complexity

## Types de Complexité

### Q: Qu'est-ce que O(1) et donnez un exemple ?

A: O(1) est la complexité constante :

- Temps d'exécution constant quel que soit l'input
- Exemple : accès à un index dans un tableau

```javascript
function getFirst(array) {
  return array[0]
}
```

Tags: #bigO #constant #complexity

### Q: Expliquez O(log n) avec un exemple concret

A: O(log n) est la complexité logarithmique :

- Divise le problème par 2 à chaque étape
- Très efficace pour de grandes données
- Exemple : recherche binaire dans un tableau trié
- Utilisé dans les arbres binaires équilibrés
  Tags: #bigO #logarithmic #complexity

### Q: Qu'est-ce qui caractérise un algorithme O(n) ?

A: Un algorithme O(n) a une complexité linéaire :

- Croissance proportionnelle à l'input
- Une seule boucle sur les données
- Exemple : parcours simple d'un tableau

```javascript
function sum(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}
```

Tags: #bigO #linear #complexity

### Q: Comment reconnaître et caractériser O(n²) ?

A: O(n²) est la complexité quadratique :

- Présence de boucles imbriquées
- Croissance rapide avec la taille des données
- Exemple : tri à bulles
- À éviter pour de grandes données
  Tags: #bigO #quadratic #complexity

## Analyse Pratique

### Q: Quelles sont les étapes pour analyser la complexité d'un algorithme ?

A: Les étapes sont :

1. Identifier les boucles et leur imbrication
2. Compter les opérations basiques
3. Identifier le comportement dominant
4. Simplifier l'expression
   Tags: #bigO #analysis #practice

### Q: Comment simplifier une expression Big O ?

A: Règles de simplification :

1. Ne garder que le terme dominant
2. Supprimer les constantes
   Exemples :

- O(n² + n) → O(n²)
- O(2n) → O(n)
- O(n³ + 100n² + 5) → O(n³)
  Tags: #bigO #simplification #rules

### Q: Comment analyser la récursivité en termes de Big O ?

A: Pour analyser la récursivité :

1. Compter le nombre d'appels récursifs
2. Analyser la profondeur de récursion
3. Considérer les opérations à chaque niveau
4. Tenir compte de la pile d'appels
   Tags: #bigO #recursion #analysis

## Optimisation

### Q: Quels sont les principaux conseils d'optimisation liés à Big O ?

A: Conseils d'optimisation :

1. Choisir les structures de données appropriées
2. Éviter les boucles imbriquées quand possible
3. Privilégier les algorithmes en O(log n)
4. Minimiser les copies de données
   Tags: #bigO #optimization #performance

### Q: Comment la notation Big O influence-t-elle les performances réelles ?

A: Impact sur les performances :

1. Indication théorique à grande échelle
2. Les constantes comptent pour petits ensembles
3. Nécessité de tests en contexte réel
4. Considération des contraintes matérielles
   Tags: #bigO #performance #practice
