document.addEventListener("DOMContentLoaded", () => {
    const person = {
        name: 'Martin',
        height: `6'2"`,
        favouriteColour: 'lightblue'
    }

    // if you are able to use a polyfill for ES2017 features, objects can have a `.entries()` method available too
    // which could look something like:

    // for (const prop of person.entries()) {
    //     console.log(prop);
    // }

    // if we want to stick to what works in ES6:
    for (const prop of Object.keys(person)) {
        const value = person[prop];
        console.log(`${prop}: ${value}`);
    }

    // but what actually seems cleaner **for iterating through objects** is `for in`:
    for (const prop in person) {
        const value = person[prop];
        console.log(`${prop}: ${value}`);
    }

});
