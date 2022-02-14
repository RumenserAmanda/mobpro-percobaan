
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



console.log("no. 7");
for (let r=0; r<people.length; r++) {
    console.log(people[r]);
    if(people[r] === "Mary") {
        break;
    }
}
console.log("\n\n\n");


console.log("no. 8");
let arrayNo8 = people.slice(1,2);
arrayNo8.forEach(r => {
    console.log(r);
});
console.log("\n\n\n");



console.log("no. 9");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people.forEach(r => {
    console.log(r);
});
console.log("\n\n\n");



console.log("no. 10");
let withBob = people;
withBob.push("Bob");
withBob.forEach(r => {
    console.log(r)
});
console.log("\n\n\n");



// OBJECT

let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

console.log("no. 1");
programming.languages.push("Go");
console.log(programming.languages);
console.log("\n\n\n");



console.log("no. 2");
programming["difficulty"] = 7;
console.log(programming.difficulty);
console.log("\n\n\n");



console.log("no. 3");
delete programming.jokes;
console.log(programming);
console.log("\n\n\n");



console.log("no. 4");
programming.isFun = true;
console.log(programming);
console.log("\n\n\n");



console.log("no. 5");
let num = -1;
programming.languages.map(funcNo5);

function funcNo5(inp) {
    num++;
    return console.log(num + " - " + inp);
}