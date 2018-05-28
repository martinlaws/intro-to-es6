document.addEventListener("DOMContentLoaded", () => {
    // unlike `var`, you cannot declare the same let variable twice in one scope
    var test = 'original variable';
    var test = 'REDEFINED variable';
    console.log(test);

    // let variable = true;
    // let variable = false;
    // // check devtools, this is the real deal.

    // // you can, however, update a let variable (duh):
    // let value = 1;
    // value = 'test';
    // console.log(value)

    // // same goes for `const`, but it can NOT be updated:
    // const name = 'Martin';
    // name = 'Cobi';

    // // `let` is block-scoped:
    // let weather = 'cloudy';
    // 
    // if ('the clouds part') {
    //     let weather = 'sunny';
    //     console.log(`the weather inside the if block is ${weather}`);
    // }
    // console.log(`the weather outisde the if block is ${weather}`);

    // as you can see in devtools, the two weather variables are scoped to their blocks
    // if you change both `let`s to `var`s, you will see that second `weather` overwrites the first

    // // const variables cannot be reassigned, but that does not make them immutable, e.g.:
    // const martin = {
    //     hair: 'brown',
    //     eyes: 'blue'
    // }
    // console.log(`Martin's initial hair colour was ${martin.hair}.`);

    // martin = {
    //     hair: 'green',
    //     eyes: 'blue'
    // }

    // // while we cannot reassign a const variable, we can update properties within it, like so:
    // martin.hair = 'green';
    // console.log(`Even though he's a const, Martin's hair is now ${martin.hair}!`);

    // // if you do need to freeze everything on a const object, you can do the following:
    // const frozenMartin = Object.freeze(martin);
    // frozenMartin.hair = 'purple';
    // 
    // console.log(frozenMartin)
    // console.log(`now, frozenMartin's hair is always ${frozenMartin.hair}, even after we try to change it.`);
});
