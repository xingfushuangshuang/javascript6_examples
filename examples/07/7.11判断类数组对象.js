function isArrayLike(o){
	if(o && 
		typeof o === "object" && // o是对象
		isFinite(o.length) && 	// o.length是有限数值
		o.length >=0 &&			// o.length为非负
		o.length === Math.floor(o.length) &&	// o.length是整数
		o.length < 4294967296)	// o.length < 2^32  数组索引最大值
		return true;
	else
		return false;
}
var a = {x:1,y:2,length:2};
isArrayLike(a); // true
var b = {x:1,y:2};
isArrayLike(b); // false