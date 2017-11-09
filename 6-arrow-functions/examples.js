document.addEventListener("DOMContentLoaded", () => {
    // arrow functions have three main advantages over regular functions:
    // 1. they're more concise
    // 2. they have implicit returns
    // 3. it doesn't re-bind the value of `this`

    const names = ['Martin', 'Alyssa', 'Philippe', 'Ryan'];

    // old school approach:
    const sayHello = names.map(function(name) {
        return `hello ${name}!`;
    });

    console.log(sayHello)

    // new school 1:
    // const sayHello2 = names.map((name) => {
    //     return `hello ${name}!`;
    // });
    //
    // console.log(sayHello2);

    // new school 2 (implicit return + no () for one argument):
    // const sayHello3 = names.map(name => `hello ${name}!`);
    // console.log(sayHello3);

    // anonymous function
    // const sayHello4 = names.map(() => `hello there!`);
    // console.log(sayHello4);

    // while all arrow functions are technically anonymous, you can sneak them into variables:
    // const sayMyName = name => {
    //     console.log(`hello ${name}!`);
    // };
    //
    // sayMyName('Alejandro');

    // this just is shitty for stack traces as it's technically still anonymous
});
