//(below) no one writes anymore this type od code
function Foo(who){
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
}

function Bar(who) {
    Foo.call(this,who);
}

Bar.prototype = Object.create(Foo.prototype);
//NOTE: .contructor is borked here, need to fix

Bar.prototype.speak = function(){
    alert("Hello," + this.identify() + ".");

}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();//Hello I am b1
b2.speak();//hello I am b2
