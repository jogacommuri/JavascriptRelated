function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var obj = {bar : "bar2"};

foo();//bar1
foo.call(obj); // ba2 use obj as this

//this hard binding

function foo2() {
    console.log(this.bar);
}

var obj1 = {bar : "bar"};
var obj3 = {bar : "bar2"};

var orig = foo2;

foo2 = function(){orig.call(obj);};

foo2();//bar
foo2.call(obj2);//bar
