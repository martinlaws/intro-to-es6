document.addEventListener("DOMContentLoaded", () => { // this is the vanilla JS version of jQuery's `$(document).ready()`
    // declaring a var variable is easy:
    var favouriteNumber = 24;
    console.log(favouriteNumber);
    // at this level, the variable is "global" and can be accessed by name

    // we can update the variable like so:
    favouriteNumber = 3;
    console.log(favouriteNumber);

    // we can even redefine the same var variable without error
    var favouriteNumber = 7;
    console.log(favouriteNumber);

    // if we declare the variable inside a function, it's function-scoped:
    function printFavouriteNumber() {
        var favouriteNumber = 2;
        console.log(favouriteNumber); // let's call this 'example 1'
    }

    printFavouriteNumber();
    console.log(favouriteNumber); // let's call this 'example 2'

    // which is why printFavouriteNumber() (example 1) returns 2 and the console.log(favouriteNumber) (example 2) returns 7,
    // they're actually two different "favouriteNumber" vars, living in two independent scopes

    // here's an examlpe of where function-scoping will screw us:
    var number = 100;
    if (number > 10) {
        var doubledNumber = number * 2;
        console.log(`The doubled number is ${doubledNumber}!`);
    }

    console.log(`~~~ why the hell can we still access ${doubledNumber} out here? ~~~`)
    // `doubledNumber` is accessible from _outside_ of the `if` block,
});
