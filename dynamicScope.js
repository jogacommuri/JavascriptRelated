/* 

theoretical dynamic scoping (note this does not exist in javascript)

function foo() {
    console.log(bar); //dynamic!
}

function baz() {
    var bar = "bar";
    foo();

}

baz(); 

*/

