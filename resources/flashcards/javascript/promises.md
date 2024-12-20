# JavaScript Promises - Flashcards

## Concepts de Base

### Q: Qu'est-ce qu'une Promise en JavaScript et quels sont ses états possibles ?

A: Une Promise est un objet représentant une valeur future. Elle peut être dans l'un des trois états :
1. Pending : En attente de résolution
2. Fulfilled : Promise résolue avec succès
3. Rejected : Promise rejetée suite à une erreur

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Success! 🎉");
  } else {
    reject("Error occurred 😢");
  }
});
```
Tags: #javascript #promises #async #states

### Q: Comment transformer du code callback en Promise ?

A: Les Promises permettent d'éviter le "callback hell" en chainant les opérations :
1. Transformer la fonction avec callback en Promise
2. Utiliser .then() pour chainer les opérations
3. Gérer les erreurs avec .catch()

```js
// Ancien style (callback hell)
getData(function(data) {
  processData(data, function(result) {
    saveData(result, function(response) {
      console.log("Done!");
    });
  });
});

// Style Promise
getData()
  .then(processData)
  .then(saveData)
  .then(() => console.log("Done!"))
  .catch(error => console.error(error));
```
Tags: #javascript #promises #callbacks #refactoring

## Manipulation des Promises

### Q: Comment chainer plusieurs opérations asynchrones avec les Promises ?

A: Le chaînage des Promises se fait via .then() :
1. Chaque .then() peut retourner une nouvelle Promise
2. La valeur résolue est passée au prochain .then()
3. Les erreurs sont capturées par le premier .catch()

```js
fetch("https://api.example.com/posts/1")
  .then(response => response.json())
  .then(post => {
    console.log(post.title);
    return fetch(`https://api.example.com/users/${post.userId}`);
  })
  .then(response => response.json())
  .then(user => console.log(user.name))
  .catch(error => console.error(error));
```
Tags: #javascript #promises #chaining #async

### Q: Comment exécuter plusieurs Promises en parallèle ?

A: Promise.all() permet d'exécuter plusieurs Promises simultanément :
1. Attend que toutes les Promises soient résolues
2. Retourne un tableau avec tous les résultats
3. Rejette si une seule Promise échoue

```js
const promise1 = fetch("https://api.example.com/posts/1");
const promise2 = fetch("https://api.example.com/posts/2");

Promise.all([promise1, promise2])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => console.log("All data:", data))
  .catch(error => console.error("Error:", error));
```
Tags: #javascript #promises #parallel #optimization

## Gestion des Erreurs

### Q: Comment gérer correctement les erreurs avec les Promises ?

A: La gestion d'erreurs se fait via .catch() :
1. Capture les erreurs de toute la chaîne
2. Peut être placé à n'importe quel niveau
3. Peut retourner une valeur de secours

```js
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error("Error:", error);
    return defaultData; // Valeur de secours
  });
```
Tags: #javascript #promises #error-handling #async

### Q: Comment créer une Promise avec timeout ?

A: On peut créer un timer basé sur les Promises :
1. Utiliser setTimeout dans une Promise
2. Permet d'ajouter des délais dans les chaînes
3. Utile pour les retards contrôlés

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Usage
wait(2000)
  .then(() => console.log("2 secondes écoulées"))
  .then(() => wait(1000))
  .then(() => console.log("3 secondes au total"));
```
Tags: #javascript #promises #timeout #async