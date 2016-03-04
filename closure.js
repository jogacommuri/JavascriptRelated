// Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

function foo() {
    var bar = "bar";
    function baz() {
        console.log(bar);
    }
    bam(baz);
}

function bam(baz) {
    baz(); // bar
}

foo();


function foo2() {
    var bar = "bar";
    return function(){
        console.log(bar);
    }
}

function bam2() {
    foo2()();
}

bam2();

function foo3() {
    var bar = "bar";
    setTimeout(function(){
        console.log(bar);
        bar = "updateBar";
        console.log(bar);
    },1000);

}

foo3();

//click handlers

function foo4() {
    var bar = "bar";
    $("#btn").click(function(evt) {
       console.log(bar); 
    });
}

foo4();

