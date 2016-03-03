/* jus physical representation 

a; // ???
b; // ???
var a = b;
var b = 2 ;
b;
a;

//actualy at compile time
var a;
var b;
a;
b;
a = b;
b =2;

b;
a;
*/ 

// for functions

var a = b();
var c = d();
a;
c;
function b() {
    return c;
}

var d = function() {
    return b();
};

//proper way to think about the above code

function b() {
    return c;
}
var a ;
var c;
var d;
a = b();
c=d();
a;
c;
d = function() {
    return b();
};

//function get hoisted first

foo1(); // "foo"

var foo1 = 2 ; 

function foo1() {
  console.log("bar");
}

function foo1() {
  console.log("foo");
}
