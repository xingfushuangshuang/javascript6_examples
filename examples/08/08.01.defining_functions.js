// Print the name and value of each property of o.  Return undefined.
function printprops(o) {
    for(var p in o) 
        console.log(p + ": " + o[p] + "\n"); 
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
// 计算笛卡尔坐标系中两点之间距离
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
// 计算阶乘
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
// 用表达式方式，计算平方
var square = function(x) { return x*x; }

// Function expressions can include names, which is useful for recursion.
// 表达式可以包含函数名称，函数名称是可选的
// 函数名称只在函数内部可用
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
// 函数是对象，可以当做参数传给别的函数
data.sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
// 定义函数后，立即执行
var tensquared = (function(x) {return x*x;}(10));
