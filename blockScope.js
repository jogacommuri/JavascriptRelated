//let keyword ES6

function foo(bar) {
    if(bar) { 
        let baz = bar;
        if(baz) {
            let bam = baz;
        }
        console.log(bam); //error
    }
    console.log(baz); // error

}

foo("bar");

//let does not hoist , so need to keep all at the top

//The below sytnax is rejected and is not in ES6
function foo1(bar) {
    let (baz = bar) {
        console.log(baz); //"bar"
    }
    console.log(baz); //error
}
foo1("bar");
