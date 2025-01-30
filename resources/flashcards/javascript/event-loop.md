# JavaScript Event Loop - Flashcards

## Concepts Fondamentaux

### Q: Qu'est-ce que l'Event Loop en JavaScript et pourquoi est-il nécessaire ?

A: L'Event Loop est le mécanisme qui permet à JavaScript de gérer les opérations asynchrones malgré sa nature single-threaded :

1. Il gère l'exécution du code
2. La gestion des réponses API
3. Les interactions utilisateur
4. Crée une illusion de multitâche

```js
console.log('Start')
setTimeout(() => console.log('Timeout'), 0)
console.log('End')

// Output:
// Start
// End
// Timeout
```

Tags: #javascript #eventloop #async #fundamental

### Q: Comment fonctionne l'exécution synchrone vs asynchrone en JavaScript ?

A: Les tâches synchrones et asynchrones sont traitées différemment :

1. Le code synchrone s'exécute immédiatement dans l'ordre
2. Le code asynchrone est délégué aux Web APIs
3. Les callbacks asynchrones attendent dans la queue

```js
// Synchrone
console.log('1️⃣ Cuisine')
console.log('2️⃣ Repas')
console.log('3️⃣ Vaisselle')

// Asynchrone
console.log('1️⃣ Cuisine')
setTimeout(() => {
  console.log('2️⃣ Repas')
}, 3000)
console.log('3️⃣ Vaisselle')
```

Tags: #javascript #sync #async #execution

## Queues et Priorités

### Q: Quelle est la différence entre microtasks et macrotasks dans l'Event Loop ?

A: L'Event Loop priorise différemment les types de tâches :

1. Microtasks (Promises) ont priorité sur les macrotasks
2. Macrotasks (setTimeout, setInterval) s'exécutent après
3. Toutes les microtasks sont exécutées avant la prochaine macrotask

```js
console.log('Start')

setTimeout(() => {
  console.log('Timeout (macrotask)')
}, 0)

Promise.resolve().then(() => {
  console.log('Promise (microtask)')
})

console.log('End')

// Output:
// Start
// End
// Promise (microtask)
// Timeout (macrotask)
```

Tags: #javascript #eventloop #microtasks #macrotasks

## Optimisation et Performance

### Q: Comment éviter le blocage de l'Event Loop avec des tâches lourdes ?

A: Pour gérer les tâches lourdes efficacement :

1. Diviser les grosses tâches en plus petites
2. Utiliser setTimeout pour "respirer" entre les morceaux
3. Permettre à l'UI de rester responsive

```js
// Mauvaise approche (bloquante)
for (let i = 0; i < 1e9; i++) {}

// Bonne approche (chunking)
let count = 0
function heavyTask() {
  if (count < 1e6) {
    count++
    setTimeout(heavyTask, 0)
  } else {
    console.log('Terminé')
  }
}
heavyTask()
```

Tags: #javascript #performance #optimization #eventloop

### Q: Comment l'Event Loop gère-t-il les Promises ?

A: Les Promises ont un traitement spécial dans l'Event Loop :

1. Elles créent des microtasks qui ont priorité
2. Leur .then() s'exécute dès que possible
3. Elles s'exécutent avant le rendu UI

```js
Promise.resolve('Immédiat').then((val) => console.log(val))

setTimeout(() => {
  console.log('Timeout')
}, 0)

// Output:
// Immédiat
// Timeout
```

Tags: #javascript #promises #async #eventloop

