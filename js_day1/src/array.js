
// A
let boys = ["Peter","lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];

//B
let all1 = boys.concat(girls);

//C
all1.join(",");

//D
all1.push("Lone", "Gitte");

//E
all1.unshift("Hans", "Kurt");


//F
all1.shift();

//G
all1.pop();

//H
all1.splice(3,2);


//I
all1.reverse();


//J
all1.sort();

//K



//I
let uppercase = all1.map(x => x.toUpperCase());


console.log(uppercase);

//M

let filter = all1.filter(e => e.startsWith("L") || e.startsWith("l"));

console.log(filter);
console.log(all1);


