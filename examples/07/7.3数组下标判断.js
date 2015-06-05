var a = [1,2];

0 in a; // true
1 in a; // true
2 in a; // false

var b = {x:1, y:2}
"x" in b; // true
"q" in b; // false

// 如果是数组，判断的是下标
// 如果是对象，判断的是属性
