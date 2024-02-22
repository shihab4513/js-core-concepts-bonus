const numbers = [45, 65, 23, 98, 19];

// for of loop
// for (const number of numbers) {
//     console.log(number);
// }
const products = [
    { id: 1, name: 'xiomi phone one night', price: 1900 },
    { id: 3, name: 'one night', price: 1900 },
    { id: 3, name: 'iPhone', price: 1900 },
    { id: 4, name: 'dell laptop', price: 1900 },
    { id: 5, name: 'samsung', price: 1900 },
    { id: 6, name: 'nokia phone', price: 1900 },
    { id: 7, name: 'phone one', price: 1900 },
];

// for (const product of products) {
//     console.log(product);
// }
function matchProducts(products, search) {
    const matched=[];
    for (const product of products) {
        //    kono 1 ta string er vitor kono word ache kina seta check korte below line use kora hoi.
        // console.log(product.name.includes(search));
        if (product.name.toLowerCase().includes(search)) {

            matched.push(product);
        }
    }
    return matched;
}

const result = matchProducts(products, 'Phone'.toLocaleLowerCase());
console.log(result);
