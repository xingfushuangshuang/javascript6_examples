var factorial = function (x) {
	if(x == 1) return 1;
	return x * arguments.callee(x - 1);
}
// arguments.callee 当前正在执行的函数