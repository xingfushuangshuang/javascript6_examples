// 书中写的是Function.isArray，有错误
var isArray = Array.isArray || function(o){
 return typeof o === "object" && Object.prototype.toString.call(o) == "[object Array]"
}
// 在ECMAScript3中，isArray代码如上