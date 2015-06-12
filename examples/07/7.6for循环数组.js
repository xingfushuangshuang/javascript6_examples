var a = [1, 2, 3, 4];
// 数组长度只查询一次
for(var i = 0, len = a.length; i < len; i++){

}

for(var i = 0; i < a.length; i++){
	if(!a[i])continue;	// 跳过null、undefined和不存在元素
}

for(var i = 0; i < a.length; i++){
	if(a[i] === undefined)continue;	// 跳过undefined和不存在元素
}

for(var i = 0; i < a.length; i++){
	if(!(i in a))continue;	// 跳过不存在元素，仍处理undefined
}
var o = {x:1, y:2};
var keys = Object.keys(o);
// 循环对象
for(var i = 0; i < keys.length; i++){
}

