var a = [1,2,3,4]
// 求和
a.reduce(function(x,y){return x+y;},1); // 11
// 求积
a.reduce(function(x,y){return x*y;},1); // 24
// 求最大值
a.reduce(function(x,y){return x>y?x:y;}); // 4

// 第二个参数是起始值