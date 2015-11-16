uniqueInteger.counter = 0;

function uniqueInteger(){
	return uniqueInteger.counter ++; // 先返回计数器值，然后计数器自加1
}

function factorial(n){
	if(isFinite(n) && n>0 && n == Math.round(n)){	// 有限的正整数
		if(!(n in factorial)){
			factorial[n] = n * factorial(n - 1);
		}
		return factorial[n]
	}else{
		return NaN;
	}
}
factorial[1]=1;	// 保证可以正常阶乘
