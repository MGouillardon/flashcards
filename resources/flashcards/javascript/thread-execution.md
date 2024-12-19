# JavaScript Principles - Flashcards

## Concepts Fondamentaux

### Q: Qu'est-ce que le thread d'exécution en JavaScript ?

A: Le thread d'exécution est l'ordre dans lequel les instructions sont exécutées dans un programme JavaScript. JavaScript est single-threaded, ce qui signifie qu'il ne peut exécuter qu'une seule instruction à la fois, du haut vers le bas du fichier.
Tags: #javascript #execution #fundamental

### Q: Quelle est la différence entre un paramètre et un argument en JavaScript ?

A: Un paramètre est une variable déclarée dans la définition d'une fonction (ex: inputNumber dans function add(inputNumber)), tandis qu'un argument est la valeur réelle passée à la fonction lors de son appel (ex: add(3), ici 3 est l'argument).
Tags: #javascript #functions #parameters

### Q: Quels sont les trois composants principaux d'un execution context ?

A: Un execution context comprend :

1. Le thread d'exécution
2. La mémoire (Variable Environment)
3. Le scope chain (chaîne des portées)
   Tags: #javascript #executionContext #scope

## Call Stack

### Q: Qu'est-ce que la call stack en JavaScript ?

A: La call stack est une structure de données LIFO (Last In, First Out) qui garde trace des fonctions en cours d'exécution. Elle stocke les contextes d'exécution de chaque fonction appelée.
Tags: #javascript #callstack #execution

### Q: Comment le mot-clé return affecte-t-il la call stack ?

A: Le mot-clé return fait deux choses :

1. Renvoie une valeur depuis la fonction
2. Enlève la fonction actuelle de la call stack
   Tags: #javascript #return #callstack

### Q: Que se passe-t-il quand la call stack est vide ?

A: Quand la call stack est vide :

1. Le programme est terminé
2. Le contexte d'exécution revient au contexte global
   Tags: #javascript #callstack #global

## Mémoire et Variables

### Q: Comment fonctionne la mémoire dans un execution context ?

A: La mémoire (Variable Environment) d'un execution context :

1. Stocke les variables locales
2. Stocke les paramètres de fonction
3. Stocke les déclarations de fonction
   Tags: #javascript #memory #variables

### Q: Dans quel ordre se fait la création d'un nouveau contexte d'exécution de fonction ?

A: 1. Création du contexte d'exécution 2. Les paramètres reçoivent les valeurs des arguments 3. Déclaration des variables locales 4. Exécution du code de la fonction
Tags: #javascript #executionContext #functions

## Exemples Pratiques

### Q: Analysez le code suivant. Que contient la mémoire globale ?

```js
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(num);
```

A: La mémoire globale contient :

- num : 3
- multiplyBy2 : référence de la fonction
- output : 6
  Tags: #javascript #memory #example

### Q: Dans l'exemple précédent, que contient la mémoire locale de multiplyBy2 ?

A: La mémoire locale de multiplyBy2 contient :

- inputNumber : 3 (paramètre)
- result : 6 (variable locale)
  Tags: #javascript #scope #variables
