//function expr
var foo = function bar() { //named function expr, helpful while debugging "bar" is local to the
// function and can be used in the function
  var foo = "baz";
  function baz(foo) {
      foo = bar; // ref of the self function
      foo; //function...
  }  
  baz();
};

foo();
bar(); // ref error
