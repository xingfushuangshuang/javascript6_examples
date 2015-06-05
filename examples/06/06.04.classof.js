// 判断对象的类型
function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    // 调用默认的Ojbect.prototype.toString
    return Object.prototype.toString.call(o).slice(8,-1);
}

var a = new Date();
var b = {};
typeof a  // object
typeof b  // object
// 无法区分时间类型和对象类型

a.toString() // Wed Jun 03 2015 21:25:50 GMT+0800 (中国标准时间)
b.toString() // [object Object]
// 自定义类没有重写toString()；Date对象重写了toString()


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
