// // Grup 1

// //1. Promise
// //a
// function helloWorld() {
//     return helloWorld = new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve("Hello World");
//         },2000);
//     });
// };

// //b
// async function messages(){
//     const msg = await helloWorld()
//     console.log(msg)
// }

// //c
// messages();

// //2. Fetch
// ambilDataUser2 = () => {new Promise(() => {
//     fetch("https://reqres.in/api/users") // b
//         .then(response => response.json()) // c
//         .then(users => {console.log("\n\n\n2. FETCH"); console.log(users.data)}); // d
// })}
// ambilDataUser2();

// //3. Async Await
// let ambilDataUser3 = async () =>{
//     try{
//         let response = await
//         fetch("https://reqres.in/api/users");
//         let json = await response.json();
//         console.log(json.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// ambilDataUser3();

// //Rumenser, Amanda

// //1. Promise
// //a
// function helloWorld() {
//     return helloWorld = new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve("Hello World");
//         },2000);
//     });
// };

// //b
// async function messages(){
//     const msg = await helloWorld()
//     console.log(msg)
// }

// //c
// messages();

// //2. Fetch
// ambilDataUser2 = () => {new Promise(() => {
//     fetch("https://reqres.in/api/users") // b
//         .then(response => response.json()) // c
//         .then(users => {console.log("\n\n\n2. FETCH"); console.log(users.data)}); // d
// })}
// ambilDataUser2();

// //3. Async Await
// let ambilDataUser3 = async () =>{
//     try{
//         let response = await
//         fetch("https://reqres.in/api/users");
//         let json = await response.json();
//         console.log(json.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// ambilDataUser3();

// //4. Class
// //a & b
// class Orang{
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }
//     //c
//     bekerja(nama) {
//         console.log(`${this.nama} sedang bekerja seperti biasa`);
//     }
// }
// //d
// let user1 = new Orang("Rumenser, Amanda", 19);
// //e
// console.log(user1.bekerja());


// //5. Inheritance
// class Orang5{//a
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }

//     //b
//     tidur(){
//         return `${this.nama} sedang tidur`;
//     }

//     //c
//     makan(){
//         return `${this.nama} sedang makan`;
//     }
// }

// class Pelajar extends Orang5 { //c
//     constructor(nama, umur, namaSekolah) { //d
//         super(nama, umur); //e
//         this.namaSekolah; //f
//         this.namaSekolah = namaSekolah;
//     }

//     belajar(){
//         return `${this.nama} belajar di ${this.namaSekolah}`;
//     }
// }

// const user = new Pelajar("John", 17, "Unklab");
// console.log(user.belajar());