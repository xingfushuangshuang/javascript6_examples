var a = [1,2,3]
// 将数组length设置为只读
Object.defineProperty(a, "length", {writable:false});
a.push(4); 	//报错 Uncaught TypeError: Cannot assign to read only property 'length' of [object Array]
a[3] = 4   // a仍是 [1, 2, 3]