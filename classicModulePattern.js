var foo = (function(){
    var o = {bar: "bar"};
    return {
        bar: function() {
            console.log(o.bar);
        }
    };
})();

foo.bar();

var foo2 = (function() {
    var publicApi = {
        bar: function() {
            publicApi.baz();
        },
        baz: function(){
            console.log("baz");
        }
    };
    return pubicAPI;


})();

foo2.bar();//baz
