function Foo(who){
    this.me = who;
}

Foo.prototype.identify  = function() {
    return "Iam " + this.me;
}

Foo.prototype.speak = function() {
    alert("Hello, " + this.identify() + ".");
};

var a1 = new Foo("a1");

a1.speak();
