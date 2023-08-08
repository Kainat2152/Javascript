//console.log main function to display in console
var con=3;
console.log(con+3);

console.time("test");
//display array in console
console.log([1,2,3]);
//display table
console.table([1,2,3]);

var value=4;
console.log(typeof value); //number

//unidentified bcz without any datatype
item="hello world"
console.log(typeof item);//String

//to dsiplay error 
console.error("Error");

//to display warning
console.warn("Warning");
console.timeEnd("test");

// to do clear the console
console.clear();

//Some commands to write in console 

/*
command---->document.getElementById("main").innerHTML;
('\n         I am writing javascript <span>Click me</span>\n    ')
command---->document.getElementById("main");
(<h1 id=​"main">​…​</h1>​)
command--->document.getElementById("main").innerText;
('I am writing javascript Click me')

*/

var val1=10;
var val2=10;

console.log(val1==val2);

var alp1=10;
var alp2="10";
console.log(alp1===alp2);

console.log(val1>val2);
console.log(val1<=val2);

console.log(null==undefined);// to check the value 
console.log(null===undefined);  // to check datatype (which is false bcz null is a value undefined means koe value be nae di we)