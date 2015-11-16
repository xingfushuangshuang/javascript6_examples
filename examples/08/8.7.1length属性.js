function check (args) {
	var actual = args.length;			// 实参的真实个数，实参
	var expected = args.callee.length;  // 期望的实体参数，形参
	if(actual !== expected){
		throw Error("Expected " + expected + "args; got " + actual);
	}
}
function f (x, y, z) {
	check(arguments);
	return x + y + z ;
}