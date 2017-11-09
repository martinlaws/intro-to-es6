document.addEventListener("DOMContentLoaded", () => {
    const person = {
        firstName: 'Martin',
        lastName: 'Laws',
        city: 'Toronto',
        country: 'Canada'
    };

    // instead of:
    const oldFirstName = person.firstName;
    const oldLastName = person.lastName;
    console.log(oldFirstName);
    console.log(oldLastName);

    // we can mass-assign by passing in the whole object:
    const {
        firstName,
        lastName,
        city,
        country
    } = person;

    console.log(firstName);
    console.log(lastName);
    console.log(city);
    console.log(country);

    const apiData = {
        thing: '123',
        anotherThing: '456',
        parentThing: {
            nestedThing: 10,
            social: {
                twitter: 'twitter.com/martinblaws',
                facebook: 'facebook.com/mlaws'
            },
            website: 'martinlaws.ca'
        },
        user: {
            firstName: 'Martino',
            lastName: 'Blaws'
        }
    }

    const {
        twitter,
        facebook
    } = apiData.parentThing.social;

    console.log(twitter);
    console.log(facebook);

    // we can also rename keys like so:
    const {
        firstName: userFirstName,
        lastName: userLastName
    } = apiData.user;

    console.log(userFirstName);
    console.log(userLastName);

    // we can also set defaults:
    const settings = {
        width: 300,
        color: 'blue'
    }
    // note that width and color are the only two that will not fallback to the default assignment
    const {
        width = 100, height = 100, color = 'green', fontSize = 25
    } = settings;

    console.log(width);
    console.log(height);
    console.log(color);
    console.log(fontSize);

    // full example or all of these examples at play together:
    const {
        w: newWidth = 400,
        h: newHeight = 500
    } = {
        w: 800
    }
    // in this example, we are only passing in w, so h falls back to the default assignment
    // then we are naming w -> width and h-> height, hence:
    console.log(newWidth);
    console.log(newHeight);


});
