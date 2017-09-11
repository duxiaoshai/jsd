/*
* @Author: Administrator
* @Date:   2017-09-04 11:10:26
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-11 10:39:58
*/




// 给特定数组中添加连字符
//   参数
// 连字符
// var arr = [1,2,3,4,5,6]
// var str =join(arr,'-')
// function join(arr,srt){
// 	var result=''

// 	for(var i=0; i<arr.length; i++){

// 	if(i<arr.length-1){
// 		result=result+arr[i]+srt
// 	}else{
// 		result+=arr[i]
// 	}

//     }
//     return result
// }
// 加连字符完







// some   判断函数里是否存在某一个元素符合条件
// every  每一个都符合条件   所有


// function some(arr,fn){
// 	for(var i=0; i<arr.length;i++){
// 		if(fn(arr[i])){
// 			return true
// 		}
// 	}
// 	return false
// }
// function every(arr,fn){
// 	for(var i=0;i<arr.length;i++){
// 		if(!fn(arr[i])){
// 			return false
// 		}
// 	}
// 	return true
// }

// 判断   some    every  完
// 
// 


// 箭头函数     为了方便回调函数的使用 

// var fn = function(a){
// 	return a;
// }

// 等价于
// 
// var fn = a => a;

// alert(fn(10));

// var fn = () => 1;

// 中间没有参数的时候加一个小括号    相当于return一个1

// var fn = (a，b) => a+b;

// 参数多也加一个小括号     相当于return一个a+b;

// var fn=(a,b)=>{
//    alert(a-b);
//    alert(a+b);
//    alert([a,b])
// }

// 他的函数语句 多余一句  加大括号
// 注意事项   箭头函数里没有arguments