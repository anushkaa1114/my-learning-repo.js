console.log("hello world!");
console.log(typeof"anushka");
console.log(typeof 9);
console.log(typeof true);
//string methods

const myVariable="Mathematics"
console.log(myVariable.length);
console.log(myVariable.charAt(0));
console.log("today is a good day".charAt(4));
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5));
console.log(myVariable.slice(5,7));
console.log(myVariable.toLowerCase());
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("at"));
console.log(myVariable.split("e"));
console.log("today is a good day".split(" "));
console.log("john,joe,dave".split(","));
//numbers
const myNumber=42;
const myFloat=42.0;
const myString="42";
console.log(myNumber===myString);
console.log(Number(myString)+3);
console.log(myString+3);
console.log(Number(true));
//no. methods
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myString));
//parseFloat() converts argument to floating pt no.
const mmyString="42.018abc"
console.log(Number.parseFloat(mmyString));
//to.fixed returns string data,rounds up,returns decimal provided as parameter
console.log(Number.parseFloat(mmyString).toFixed(2));
const mmyFloat=42.0634;
console.log(mmyFloat.toFixed(2));
//Number.parseInt()-converts to integer,removes any other char
//toString gives string
console.log(typeof toString(myFloat));
//chaining=using many methods together
console.log(parseFloat(mmyString).toFixed(2).toString());
console.log(Number.isNaN("anushka"));
console.log(isNaN("anushka"));
console.log(Math.PI);
console.log(Math.trunc(7.8));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.pow(2,4));
console.log(Math.max(2,0.8,9));//similarlymin
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);console.log(Math.floor(Math.random()*10)+1);
const anyName="taylor";
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));