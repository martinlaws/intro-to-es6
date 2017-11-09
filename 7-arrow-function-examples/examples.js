document.addEventListener("DOMContentLoaded", () => {
    const race = '4x400m Relay';
    const winners = ['Seabiscuit', 'Secretariat', "Santa's Little Helper"];

    // you can map to a straight up object literal by wrapping the object literal in brackets
    const win = winners.map((winner, i) => ({
        name: winner,
        race, // this is a new `ES6` feature that is sugar for `race: race`
        place: i + 1 // because i is 0-indexed
    }));

    console.table(win);

    // you can even throw conditionals into arrow functions so long as they return true or false
    // const ages = [23, 103, 24, 53, 11, 77];
    // const oldPeople = ages.filter(age => age >= 60);

    // console.log(oldPeople);
});
