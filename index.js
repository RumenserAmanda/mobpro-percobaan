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
// Promise (w/then()) - Fulfilled
let promiseWthenF = new Promise((resolve, reject) => {
    if(true) {
        resolve("resolve");
    }
    else {
        reject("reject");
    }
});
promiseWthenF.then((r) => {
    console.log(r);
});

// Promise (w/then()) - Rejected
let promiseWthenR = new Promise((resolve, reject) => {
    if(false) {
        resolve("resolve");
    }
    else {
        reject("reject");
    }
});
promiseWthenR.then((r) => {
    console.log(r);
});

// Promise (w/Async)
async function asyncFunc() {
    return "Asynchronous Function";
};
console.log(asyncFunc());

// Promise (w/Async & Await)
let con = true;
let asyncAwaitFunc = async (con) => {
    if (con) {
        return "Fulfilled";
    }
    else {
        throw "Rejected";
    }
};
const execute = async (con) => {
    try {
        const msg = await asyncAwaitFunc(con);
        console.log(msg);
        console.log("Fulfilled (after condition)");
    }
    catch (error) {
        console.log(error);
    }
};
execute(true);
execute(false);



// 3. CLASS
class Mahasiswa {
    constructor(nama, tahun, NIM) {
        this.nama = nama;
        this.tahun = tahun;
        this.NIM = NIM;
    }

    cekNIM() {
        return this.NIM;
    }
}

const mhs1 = new Mahasiswa("alpha", 1, 123412341234);
console.log(mhs1);
console.log(mhs1.cekNIM());

const mhs2 = new Mahasiswa("bravo", 2, 678967896789);
console.log(mhs2);
console.log(mhs2.cekNIM());