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