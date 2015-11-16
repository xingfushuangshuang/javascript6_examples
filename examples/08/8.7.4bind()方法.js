function f(y){return this.x + y}	// 待绑定的函数
var o = {x:1};	// 将要绑定的对象
var g = f.bind(o); // 只能通过g()调用o.f()，如果直接o.f()会报错
g(2);

// 模拟bind()
function bind (f, o) {
	if(f.bind)	return f.bind(o);
	else return function  () {
		return f.apply(o, arguments)
	}
}