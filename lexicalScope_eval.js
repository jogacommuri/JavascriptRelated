function foo() {
    var bar = "bar";
    function baz() {
        console.log(bar);//lexical
    }
    baz();
}
foo();

var bar = "bar";
function foo1(str) {
    eval(str);//cheating!! // dont use eval untill  there is no other option
    console.log(bar); //42
}

foo1("var bar = 42;");
