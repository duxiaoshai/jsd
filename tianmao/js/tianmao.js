/*
* @Author: Administrator
* @Date:   2017-09-18 18:29:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-18 18:36:04
*/
window.onload=function(){
	let cedaohan = document.getElementsByClassName('chedaohang')[0];
	let lis = cedaohan.getElementsByTagName('li')
	let item = document.getElementsByClassName('item')
	for(let i = 0; i<lis.length;i++){
		lis[i].onmousemove=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}

	}
	}