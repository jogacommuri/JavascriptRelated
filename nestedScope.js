
var foo = "bar";

function bar(){
    var foo = "baz";
    function baz(foo) { //foo treated as a local vairable to baz
        foo = "bam";
//     debugger;
        bam = "yay";// will be kept in global scope
    }
    baz();

    for(i = 10 ; i < 12 ; i++) {//i will be kept in global
        console.log(i);
    }

    for(var j = 2; j < 3 ; j++) {
        console.log(j);
    }


}




bar();
console.log(foo);
console.log(bam);
console.log(i); // i global
console.log(j);// ref error
console.log(baz);//ref error


var foo1;
try {
    foo1.length;
}
catch(err) { //var decl in catch has block scope
    console.log(err)
}

console.log(err) // reference error
