
// ARRAY

let people = ["Greg", "Mary", "Devon", "James"];



console.log("no. 1")
for (let r=0; r<people.length; r++) {
    console.log(people[r]);
}
console.log("\n\n\n");



console.log("no. 2");
people.forEach(r => {
    console.log(r);
});
console.log("\n\n\n");



// console.log("no. 3");
// people.shift();
// people.forEach(r => {
//     console.log(r);
// });
// console.log("\n\n\n");



// console.log("no. 4");
// people.pop();
// people.forEach(r => {
//     console.log(r);
// });
// console.log("\n\n\n");



console.log("no. 5");
people.unshift("Matt")
people.forEach(r => {
    console.log(r);
});
console.log("\n\n\n");



console.log("no. 6");
people.push("Amanda");
people.forEach(r => {
    console.log(r);
});
console.log("\n\n\n");


