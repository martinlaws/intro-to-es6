document.addEventListener("DOMContentLoaded", () => {
    const animals = ['dog', 'cat', 'monkey', 'iguana', 'llama', 'emu', 'elephant'];

    // traditionally, we've looped over iterables in javascript like so:
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }

    // yuck, right? we could also do:

    animals.forEach((animal) => {
        console.log(animal);
    });

    // well that has its own problems:
    // 1) we can't `break` the loop
    // 2) we can't skip (`continue`) any members of the array

    // one other old school way:

    for (const i in animals) {
        console.log(animals[i]);
    }
    // this approach has a **very** weird quirk - if you monkeywrench porperties onto the `Array.prototype`,
    // they'll show up as array members?!?! there must be a better approach in ES6?
    console.log('----- enter, for of loops: -----');

    for (animal of animals) {
        console.log(animal);
    }

    console.log(`----- but wait, there's more: -----`);
    // we can access the index AND value as an array (called the iterator) using `member.entries()`
    // we can combine this with destructuring like so:

    for ([i, animal] of animals.entries()) {
        console.log(`${animal} is in position animals[${i}]`);
    }

    // bonus, you can use `for of` loops on DOM collections like so:
    const pTags = document.querySelectorAll('p');

    console.log(`----- siri, show us what's inside of each <p> tag on this page: -----`);

    for (const p of pTags) {
        console.log(p.textContent);
    }

});
