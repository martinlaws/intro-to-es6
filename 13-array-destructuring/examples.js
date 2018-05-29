document.addEventListener("DOMContentLoaded", () => {
    // here's some user info
    const userInformation = ['martin', 'laws', 12, 'martinlaws.ca'];

    // // here's how we used to break array values into individual variables:
    // var oldFirstName = userInformation[0];
    // var oldLastName = userInformation[1];
    // var oldFavouriteNumber = userInformation[2];
    // var oldWebsite = userInformation[3];
    
    // console.log(oldFirstName, oldLastName, oldFavouriteNumber, oldWebsite);

    // // now, we can do this _so_ much more conveniently (in one line!) with destructuring:
    const [firstName, lastName, favouriteNumber, website] = userInformation;
    console.log(firstName, lastName, favouriteNumber, website);

    // // we could even do this with single-string data (like a CSV):
    const data = 'test,lol,l33t';
    const [firstValue, secondValue, thirdValue] = data.split(',');
    console.log(firstValue, secondValue, thirdValue);

    // // what if we want to grab the first two values and not the rest?
    const newData = '1,2,3,4,5,6,7';
    const [numberOne, numberTwo, ...otherNumbers] = newData.split(',');
    console.log(numberOne, numberTwo, otherNumbers);

    // // but what if we don't want to throw away all the rest of the values? use the **rest operator**!
    const newestData = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p';
    const [first, second, ...everythingElseArray] = newestData.split(',');
    console.log(first, second, everythingElseArray);
});
