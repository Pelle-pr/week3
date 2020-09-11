let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

names.forEach(e => console.log(e));

let filterNames = names.filter(names => names.length <=3);

filterNames.forEach(e => console.log(e));

let upperCase = names.map(name => name.toUpperCase());
upperCase.forEach(e => console.log(e));


let nameli= names.map(name => "<li>" +name+"</li>");
console.log(nameli);

nameli.push("</ul>");
nameli.unshift("<ul>");

let html = nameli.join("");
console.log(html);

let cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let car1 = cars.filter(cars => cars.year > 1999);
console.log(car1);

let car2 = cars.filter(cars => cars.make = "Volvo");
console.log(car2);

let car3 = cars.filter(cars => cars.price < 5000);
console.log(car3);

let sql = cars.map(x => "INSERT INTO cars (id,year,make,model,price) VALUES ("+x.id+ ","+x.year+",'"+x.make+"','"+x.model+"',"+x.price+";");
sql.join("");
console.log(sql);



var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

let namestest = ["John", "Bent", "Henning", "Lennart"];

        let namesmap = namestest.map(x => "<li>" +x+ "</li>").join("");
       
        console.log(namesmap);
        
        
       // console.log(namesmap);
//        let namesjoin = namesmap.join("");
//        console.log(namesjoin);
        

