// 对象中的key 类似数组下标
// JS中的数组方法是通用的~
var a = {0:"a",1:"b",2:"c",length:3};

Array.prototype.join.call(a, ""); // "abc"
Array.prototype.join.call(a, ","); // "a,b,c"

Array.prototype.slice.call(a,1); //["b", "c"]

Array.prototype.map.call(a,function(item){
   return item.toUpperCase();
});	// ["A", "B", "C"]