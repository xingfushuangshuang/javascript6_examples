// 通过原型继承创建一个新对象
function inherit(p) {	// p必须是一个对象
    if (p == null) throw TypeError();  
    if (Object.create)                // Object.create是ECMAScript 5中新加的函数
        return Object.create(p);      // 存在的话，就直接使用   
    var t = typeof p;                 // 在ECMAScript 3中用prototype继承
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                   
    f.prototype = p;                  // 将空函数的原型指定为p对象
    return new f();                   // 返回空构造函数
}
// 最早提出原型继承的人：
// http://javascript.crockford.com/prototypal.html

var a = {x:1, y:2};
var b = inherit(a);
console.log(b.x);	// 1
console.log(b.y);	// 2
