var obj = {
    a:2,
    b:3,
    c:4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with(obj) {
    a = b + c;
    d = b -a;
    d = 3; // ??? hey scope of obj d do u have lhs ref d "go fish" , go to outer scope and ask  hey global scope 
    //do have a ref for d , no i dont but i create one for u and give . So d will be kept in global scope
}

obj.d; // undefined

d; // 3 -- oops!

// problem with "with" auto globals, creating whole new lexical scope at run time (more evil than "eval").

// in strict not allowed at all
