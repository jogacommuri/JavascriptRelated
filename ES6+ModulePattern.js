// assume this below code in foo.js (till lines 6)
var o = {bar :"bar"};

export function bar() {
    return o.bar;
}

//as of ES6
/* usage
import bar from "foo";
bar();//bar

module foo from "foo"; //might be rejected 
foo.bar();//bar 
*/
