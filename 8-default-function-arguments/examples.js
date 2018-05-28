document.addEventListener("DOMContentLoaded", () => {
    // we can now set default arugments in functions like so:

    function calculateBill(subtotal, tax = 0.13, tip = 0.15) {
        return subtotal + (subtotal * tax) + (subtotal * tip);
    }

    // we can see that the default arguments kick in when only subtotal is passed in:
    console.log(`Total with default arguments: ${calculateBill(100)}`);

    // // we can pass in the first two and skip the third:
    // console.log(`Total with two arguments: ${calculateBill(100, 0.15)}`);

    // // or we can skip the middle argument by passing undefined:
    // console.log(`Total skipping the middle argument: ${calculateBill(100, undefined, 0.2)}`);
});
