document.addEventListener("DOMContentLoaded", () => {
    // the 'temporal dead zone' describes the space between a variable declaration being
    // hoisted and assigned, for example, the following code returns `undefined` in devtools:
    console.log(message);
    var message = 'Hello world!';

    // see what happened there? the variable's existence was hoisted, but the value was not

    // this doesn't happen with `let` or `const`, uncomment either of the following examples:
    // example 1
    // console.log(letMessage);
    // let letMessage = 'World? Can you hear me?';
    // example 2
    // console.log(constMessage);
    // const constMessage = 'Hello from the other side!';
});
