/*
* @Author: Administrator
* @Date:   2017-09-18 19:38:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 00:54:09
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
	let bannertu = document.getElementsByClassName('bannertu')[0];
	let img =bannertu.getElementsByTagName('li')
	let yuandian = document.getElementsByClassName('yuandian')[0];
	let lis1 = yuandian.getElementsByTagName('li')
	let banner = document.getElementsByClassName('banner')[0]
	for(let i=0; i<lis1.length;i++){
		lis1[i].onclick = function(){
			for(let i=0; i<6;i++){
				lis1[i].style.background='#17171c'
				img[i].style.display='none'
			}
			    num=i
			    lis1[num].style.background='#999'
				img[i].style.display='block'
			
		}
		

	}
	// let now =0;
	// for(let i=0; i<lis1.length;i++){
 //          lis1[i].onclick = function(){
 //          img[now].style.display='none'
 //          img[i].style.display='block'
 //           now=i
 //          }
          

	// 用var声明时的方法

// for(var i=0;i<lis1.length;i++){
// 	lis1[i].index=i;
// 	lis1[i].onclick=function(){
// 		img[num].style.display='none';
// 		img[this.index].style.display= 'block';
// 		num = this.index	
// 	}
// }

// let now =0;
// for(var i=0;i<lis1.length;i++){
// 	lis1[i].index=i;
// 	lis1[i].onclick=(function(i){
// 		return function(){
// 		img[now].style.display='none';
// 		img[i].style.display= 'block';
// 		now = i
// 		}
// 	})(i)

 
let t;
t = setInterval(move,1000);
let num = 0
function move(){
	num++
    if(num==img.length){
    	num=0
    }
    for(let i=0;i<img.length;i++){
       img[i].style.display='none'
       lis1[i].style.background='#17171c'
    }
       img[num].style.display='block'
       lis1[num].style.background='#999'
}
banner.onmousemove=function(){
	clearInterval(t)
}
banner.onmouseout=function(){
	t = setInterval(move,1000);
}



}
