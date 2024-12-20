# JavaScript Higher-Order Functions - Flashcards

## Concepts Fondamentaux

### Q: Qu'est-ce qu'une Higher-Order Function (HOF) en JavaScript ?

A: Une Higher-Order Function est une fonction qui :
1. Accepte une ou plusieurs fonctions comme arguments
2. Et/ou retourne une fonction
3. Permet une meilleure abstraction et réutilisation du code

```js
// Exemple de HOF prenant une fonction en paramètre
const executeOperation = (operation, x, y) => {
    return operation(x, y);
};

const add = (a, b) => a + b;
console.log(executeOperation(add, 5, 3)); // 8
```
Tags: #javascript #functions #hof #fundamental

## Array Methods

### Q: Comment fonctionne la méthode map() et quand l'utiliser ?

A: map() est une HOF qui :
1. Accepte une fonction de transformation
2. Applique cette fonction à chaque élément du tableau
3. Retourne un nouveau tableau avec les résultats

```js
const numbers = [1, 2, 3, 4, 5];

// Doubler chaque nombre
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Transformer en objets
const objects = numbers.map(num => ({ value: num }));
console.log(objects); // [{value: 1}, {value: 2}, ...]
```
Tags: #javascript #array #map #transformation

### Q: Comment utiliser filter() pour filtrer des données ?

A: filter() est une HOF qui :
1. Accepte une fonction de prédicat (retourne true/false)
2. Garde uniquement les éléments pour lesquels le prédicat est true
3. Retourne un nouveau tableau filtré

```js
const fruits = ["pomme", "banane", "kiwi", "abricot"];

// Filtrer les fruits commençant par 'a'
const aFruits = fruits.filter(fruit => fruit.startsWith("a"));
console.log(aFruits); // ["pomme", "abricot"]

// Filtrer les fruits courts
const shortFruits = fruits.filter(fruit => fruit.length <= 4);
console.log(shortFruits); // ["kiwi"]
```
Tags: #javascript #array #filter #conditions

### Q: Comment utiliser reduce() pour transformer des données ?

A: reduce() est une HOF polyvalente qui :
1. Accepte une fonction d'accumulation et une valeur initiale
2. Combine les éléments du tableau en une seule valeur
3. Peut être utilisée pour diverses transformations

```js
const prices = [10, 20, 30];

// Calculer la somme
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60

// Créer un objet à partir d'un tableau
const items = ["A", "B", "A", "C"];
const count = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(count); // { A: 2, B: 1, C: 1 }
```
Tags: #javascript #array #reduce #accumulation

## Fonctions Avancées

### Q: Comment fonctionne le currying avec les HOFs ?

A: Le currying est une technique où :
1. Une fonction retourne une autre fonction
2. Les arguments sont appliqués un par un
3. Permet la création de fonctions spécialisées

```js
// Fonction de multiplication curryfiée
const multiply = x => y => x * y;

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Version plus complexe avec plus de paramètres
const add = x => y => z => x + y + z;
console.log(add(1)(2)(3)); // 6
```
Tags: #javascript #currying #functional #hof

### Q: Comment créer une closure avec une HOF ?

A: Une closure via HOF permet :
1. De maintenir un état privé
2. D'encapsuler des données
3. De créer des fonctions avec mémoire

```js
const createCounter = () => {
    let count = 0;
    return () => ++count;
};

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (état séparé)
```
Tags: #javascript #closure #state #encapsulation