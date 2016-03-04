//when function is excuted with new keyword infront of it
//it turns a func call into constructor call


//1. A brand new object is created out of thin air

//2. **that objects get linked to different object 

//3. brand new object gets bound as the this key word for the purpose of that function call

//4. if the function that does return anything, implicitly that bran new object (this) will be retuned 


function foo() {
    this.baz = "baz";
    console.log(this.bar+ " " + baz);
}

var bar = "bar";
var baz = new foo();

//rules 
//1. was the func called with 'new'?
//2. was the function called with call or apply specifying an explicit this?
//3.was the function called via a containing/owing (context)
//4. DEFAULT: global object

