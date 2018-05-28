document.addEventListener("DOMContentLoaded", () => {
    // `let` is very useful in the context of the _IIFE (immediately invoked function expression),
    // this is how we have learned to _insulate_ variables from leaking into the global scope:
    (function() {
        var name = 'martin';
        console.log(`name from IIFE: ${name}`);
    })();
    console.log(`name from the outside world: ${name}`);

    // // now, we can simply do this:
    // {
    //   const name = 'martin';
    //   console.log(`name from simple little {}: ${name}`);
    // }
    // console.log(`name from the outside world: ${name}`);
    // // the curly brackets create a new **block**, and that's all we need to scope `let` or `const`

    // // let and const will also help us loads with `for` loops, like this:
    // for (var i = 0; i < 10; i++) {
    //     console.log(i);
    // }
    // // unfortunately, we now have a problem:
    // console.log(`the i variable has leaked out of our loop and is now set to: ${i}`);

    // // further, because these all reference the same _i_ var, the result of this `setTimeout` is underwhelming:
    // for (var i = 0; i < 10; i++) {
    //     setTimeout(function () {
    //         console.log(`the number is ${i}`);
    //     }, 1000);
    // }

    // // by simply changing `var` to `let`, we **block-scope** the variable and see this result:
    // for (let i = 0; i < 10; i++) {
    //     setTimeout(() => {
    //         console.log(`the number is ${i}`);
    //     }, 1000);
    // }
});
