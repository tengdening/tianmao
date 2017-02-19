$(function(){
// 1.获取变量

var box=$('.box')[0];
var imgbox=$('.imgbox');
var imgtu=$('.imgtu');
var left=$('.left')[0];
var right=$('.right')[0];
var anniubox=$('.anniubox');
var anniu=$('.anniu');
var aa = 0;
function move(obj){
	// obj = obj || "r";
	// if (obj == "r") {
	// 	aa++;
	// 	if (aa >= imgtu.length) {
	// 		aa = 0;
	// 	}
	// }else if (obj == "l") {
	// 	aa--;
	// 	if (aa==-1) {
	// 		aa=imgtu.length-1;
	// 	}
	// }
	aa++;

	if (aa==imgtu.length) {
		aa=0;
	}
	if (aa==-1) {
		aa=imgtu.length-1;
	};
	for (var i = 0; i < imgtu.length; i++) {
		imgtu[i].style.zIndex=1;
		anniu[i].style.background="#fff"
	}
	anniu[aa].style.background="red"
	imgtu[aa].style.zIndex=2;
}
for (var i = 0; i < anniu.length; i++) {
	anniu[i].index=i;
	anniu[i].onmouseover=function(){
		aa=this.index;
		for (var j = 0; j < anniu.length; j++) {
			imgtu[j].style.zIndex=0;
			anniu[j].style.background="#fff"
		}
		anniu[this.index].style.background="red"
		imgtu[this.index].style.zIndex=2;
	}
}
// var t=setInterval(move,1000)
// box.onmouseover=function(){
// 	clearInterval(t);
// }
// box.onmouseout=function(){
//     t=setInterval(move,1000)
//   }

var t= setInterval(move,1000);
	box.onmouseover= function(){
		clearInterval(t);
}
box.onmouseout = function(){
	
	t = setInterval(move,1000);
	// aa = imgtu[this.index]+1; 
}
right.onclick = function(){
	move();
}
left.onclick = function(){
	aa-=2;
	move();
}

// right.onclick=function(){
//       move("r")
//   }
// left.onclick=function(){
//   	 move("l")
//   }
// 下拉菜单
var xiala1=$('.xiala1-zi')[0];
var a1=$('.xiala1')[0]
a1.onmouseover=function(){
	xiala1.style.display="block";
}
a1.onmouseout=function(){
	xiala1.style.display="none";
}


//京东秒杀  鼠标放上去朝着上边移动
var theTop=$('.the-top-1');
for (var i = 0; i < theTop.length; i++) {
	theTop[i].index=i;
	theTop[i].onmouseover=function(){
		animate(theTop[this.index],{top:6},100)
	}

}
for (var i = 0; i < theTop.length; i++) {
	theTop[i].onmouseout=function(){
		animate(theTop[this.index],{top:16},100)
	}
}

// 所有图片朝着左边移动
var theLeft=$('.the-left-1')
for (var i = 0; i < theLeft.length; i++) {
	theLeft[i].index=i;
	theLeft[i].onmouseover=function(){
		animate(theLeft[this.index],{marginLeft:-10},100)
	}

}
for (var i = 0; i < theLeft.length; i++) {
	theLeft[i].onmouseout=function(){
		animate(theLeft[this.index],{marginLeft:0},100)
	}
}
// 图片朝着右边移动
var theRight=$('.the-right-11')
for (var i = 0; i < theRight.length; i++) {
	theRight[i].index=i;
	theRight[i].onmouseover=function(){
		animate(theRight[this.index],{marginRight:-10},100)
	}

}
for (var i = 0; i < theRight.length; i++) {
	theRight[i].onmouseout=function(){
		animate(theRight[this.index],{marginRight:0},100)
	}
}

// 按需更新第一步


var imgs1=$('img');
var bh=document.documentElement.clientHeight;
for (var i = 0; i < imgs1.length; i++) {
	if(getPosition(imgs1[i])<bh){
		imgs1[i].src=imgs1[i].getAttribute("date-src");
	}
}

// 左边楼层按钮


var btns=$('.tn-leftdw');
var floors=$('.tzlc-tn');
var btnbox=$('.left-gddw')[0];
var temp=btns[0];

for (var i = 0; i < btns.length; i++) {
	btns[i].index=i;
	btns[i].onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		var ot=floors[this.index].offsetTop;
		animate(obj,{scrollTop:ot},1000);
		temp.style.background="";
		this.style.background="#D70B1C";
		temp=this;
	}
}

var t;
window.onscroll=function(){
	var dtop=document.body.scrollTop||document.documentElement.scrollTop;
	// var jbo=document.documentElement.scrollTop==0?document.body:document.documentElement;
	// var dtop=jbo.scrollTop;
	clearTimeout(t);
	t = setTimeout(function(){
		for (var i = 0; i < floors.length; i++) {
		var btop=floors[i].offsetTop;
			if(btop<dtop+300){
				for (var j = 0; j < btns.length; j++) {
					btns[j].style.background="";
				}
				btns[i].style.background="#D70B1C";
			}
		}
	},30)
	var eehh=document.documentElement.scrollTop==0?document.body:document.documentElement;
	var sb=eehh.scrollTop;
	if (sb>1740) {
		btnbox.style.display="block";
		animate(btnbox,{opacity:1},200,Tween.Quad.easeIn)
	 }else{
		animate(btnbox,{opacity:0},200,function(){
			btnbox.style.display="none";
		})
	}

// 按需更新第二步
	var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
	var st=obj.scrollTop;
	for (var i = 0; i < imgs1.length; i++) {
		if (getPosition(imgs1[i])<st+bh) {
			imgs1[i].src=imgs1[i].getAttribute('date-src')
		}	
	}

// 顶部搜索框
	var ssbox=$('.tn-top-gddw')[0];
	var enen=document.documentElement.scrollTop==0?document.body:document.documentElement;
	var heihei=enen.scrollTop;
	if (heihei>650) {
		ssbox.style.display="block";
		animate(ssbox,{opacity:1},200,Tween.Quad.easeIn)
	 }else{
		animate(ssbox,{opacity:0},200,function(){
			ssbox.style.display="none";
		})
	}	

}

// 返回顶部

var	totop=$('.tn-leftdw-top')[0];
	totop.onclick=function(){
		if (document.body.scrollTop==0) {
			var obj=document.documentElement;
		}else{
			var obj=document.body;
		}
		animate(obj,{scrollTop:0},1000)
	}




//右边固定定位弹出框
var tck=$('.gddw-top-right');
var gudk=$('.gddw-top');
for (var i = 0; i < gudk.length-1; i++) {
	gudk[i].index=i;
	gudk[i].onmouseover=function(){
		animate(tck[this.index],{left:-58},300)
	}
	gudk[i].onmouseout=function(){
		animate(tck[this.index],{left:36},300)
	}
};

var inner=$('.nbk');
var prev=$('.prev');
var next=$('.next');
var wbk=$('.wbk')
for (var i = 0; i < inner.length; i++) {
	jd(wbk[i],inner[i],prev[i],next[i])
};
function jd(wbk,inner,prev,next){
	var width=wbk.offsetWidth;
	var num=0;
	var sjhs=true;
	next.onclick=function(){
		if (sjhs) {
			sjhs=false;
		num++;
		if (num==3) {
			num=1;
			inner.style.marginLeft=0;
		}
		animate(inner,{marginLeft:-width*num},1000,Tween.Bounce.easeOut,function(){
			sjhs=true;
		})
		}
	}
	prev.onclick=function(){
		if (sjhs) {
			sjhs=false;
			num--;//num--所以下边改成-1，本来为0；
		if (num==-1) {
			inner.style.marginLeft=-width*2+"px";
			num=1;
		}
		animate(inner,{marginLeft:-width*num},1000,Tween.Bounce.easeOut,function(){
			sjhs=true;
		})
		}
	}
}


//banner右边选项卡
var top2=$(".top2")[0];
var ybzbtn=$(".aa-1");
var ybztu=$(".zi",top2);
var xia=$(".xia")[0];
ybztu[0].style.zIndex=1;
for (var i = 0; i < ybzbtn.length; i++) {
	ybzbtn[i].index=i;
	ybzbtn[i].onmouseover=function(){
		for (var j = 0; j < ybztu.length; j++) {
			ybztu[j].style.zIndex=-1;
		};
		ybztu[this.index].style.zIndex=1;
	}
};

//展品右边选项卡
var habtn=$(".hahaha");
var hatu=$(".right-bottom");
hatu[0].style.zIndex=9;
for (var i = 0; i < habtn.length; i++) {
	habtn[i].index=i;
	habtn[i].onmouseover=function(){
		for (var i = 0; i < hatu.length; i++) {
			hatu[i].style.zIndex=0;
		};
		hatu[this.index].style.zIndex=9;
	}
};


})













