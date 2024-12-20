# JavaScript Quirks and Gotchas - Flashcards

## Type Coercion et Comparaisons

### Q: Pourquoi "False" == 0 est true mais "False" == "0" est false ?

A: Cela est dû à la coercition de type de l'opérateur ==:
1. "False" comparé à 0 : "False" est converti en NaN, qui est ensuite converti en 0
2. "False" comparé à "0" : comparaison directe de strings, donc false
3. Pour éviter ces comportements, utilisez === pour une comparaison stricte

```js
console.log("False" == 0);   // true
console.log("False" == "0"); // false
console.log("False" === 0);  // false
```
Tags: #javascript #coercion #comparison #equality

### Q: Pourquoi [] == ![] est true mais [] == [] est false ?

A: C'est un exemple complexe de coercition de type :
1. [] == [] est false car ce sont deux références différentes en mémoire
2. [] == ![] devient [] == false car ![] est d'abord évalué à false
3. [] est converti en string vide "", puis en 0
4. 0 == false devient true après coercition
Tags: #javascript #arrays #coercion #comparison

### Q: Pourquoi 0 == "0" et 0 == [] sont true mais "0" != [] ?

A: La coercition suit des règles spécifiques :
1. 0 == "0" : "0" est converti en nombre
2. 0 == [] : [] est d'abord converti en string vide "", puis en 0
3. "0" == [] : [] devient "", donc "0" != ""
Tags: #javascript #coercion #arrays #comparison

## Nombres et Calculs

### Q: Pourquoi 0.1 + 0.2 n'est pas exactement égal à 0.3 ?

A: C'est dû à la représentation des nombres flottants en IEEE-754 :
1. Les nombres sont stockés en binaire
2. Certaines fractions décimales ne peuvent pas être représentées exactement en binaire
3. Solution : utiliser Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON

```js
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false

// Solution correcte
const isEqual = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(isEqual);  // true
```
Tags: #javascript #numbers #floating-point #precision

### Q: Pourquoi undefined + 1 retourne NaN, mais null + 1 retourne 1 ?

A: Les opérations arithmétiques traitent undefined et null différemment :
1. undefined n'a pas de valeur numérique, donc undefined + 1 donne NaN
2. null est converti en 0 lors d'opérations arithmétiques
3. donc null + 1 donne 1
Tags: #javascript #coercion #arithmetic #undefined

## Valeurs Spéciales

### Q: Pourquoi NaN === NaN est false ?

A: NaN est unique car :
1. Il représente une valeur "pas un nombre"
2. Il n'est égal à rien, même pas à lui-même
3. Pour tester NaN, utilisez Number.isNaN()
4. C'est conforme à la spécification IEEE-754
Tags: #javascript #NaN #comparison #numbers

### Q: Pourquoi typeof null retourne "object" ?

A: C'est un bug historique de JavaScript :
1. À l'origine, les valeurs étaient représentées par un tag de type + une valeur
2. null était représenté par le tag 0, même tag que les objets
3. Ce bug n'a jamais été corrigé pour maintenir la compatibilité
Tags: #javascript #types #null #history

## Arrays et Objets

### Q: Quelle est la différence entre new Array(3) et [,,] ?

A: Ces deux constructions créent des tableaux différents :
1. new Array(3) crée un tableau avec 3 slots vides
2. [,,] crée un tableau avec 2 valeurs undefined
3. Les slots vides se comportent différemment avec les méthodes d'array
Tags: #javascript #arrays #construction #undefined

### Q: Comment [] + {} diffère de {} + [] ?

A: L'ordre des opérations affecte le résultat :
1. [] + {} convertit les deux en strings et concatène
2. {} est converti en "[object Object]"
3. Le résultat est différent à cause des règles de parsing de JavaScript
Tags: #javascript #arrays #objects #operators #coercion