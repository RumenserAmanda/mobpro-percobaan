/* First Commit
1.Module
- Export & Import
- Export As & Import As
- Export Default

2.Asyncronous JS
- Contoh sederhana asyncronous JS menggunakan setTimeout()
- Promise
- Menggunakan Promise menggunakan then()
- Menggunakan Promise menggunakan Async/Await

3.Class in JS
*/



// 1. MODULE

// Import ex. 1
import { c1 } from './module.js';
console.log(c1);

// Import ex. 2
import { helloWorld, object } from './module.js';
helloWorld();
console.log(object);

// Import As ex. 1
import { c2 as c3 } from './module.js';
console.log(c3);

// Import As ex. 2
import { haloDunia as HD, objek as O } from './module.js';
HD();
console.log(O);

// Import As ex. 3
import * as semua from './module.js'
console.log(semua);

// Import default
import def from './module.js';
console.log(def);



/*// 2. ASYNCHRONOUS

// Contoh setTimeout()
setTimeout(() => {
    console.log("4");
}, 500);
console.log("1");
console.log("2");
console.log("3");

// Promise - fulfilled
let promiseFulfilled = new Promise((resolve, reject) => {
    if (true) {
        resolve(console.log("resolve"))
    }
    else {
        reject(console.log("reject"));
    }
});

// Promise
let promise = new Promise((resolve, reject) => {
    if (false) {
        resolve(console.log("resolve"))
    }
    else {
        reject(console.log("reject"));
    }
});

*/
//Second Commit