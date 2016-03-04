
function foo5() {
    var bar = 0 ;
    setTimeout(function(){
        console.log(bar++);
    },100);
    setTimeout(function(){
      console.log(bar++);  
    },200);
};

foo5();//0,1


 
//nested scope

function foo6() {
    var bar = 0;
    setTimeout(function() {
        var baz = 1;
        console.log(bar++);
        setTimeout(function() {
           console.log(bar+baz); 
        },400)
    },300);
};

foo6(); //0 2
