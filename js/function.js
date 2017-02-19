
    // 1.兼容的通过类名获取元素
    function getClass(sele,obj){
    var obj=obj||document;
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(sele);
    }else{
        var arr=[];
        var all=obj.getElementsByTagName("*");
        for(var i=0;i<all.length;i++){
            var leiming=all[i].className;
            if(check(leiming,sele)){
                arr.push(all[i])
            }
        }
        return arr;
    }
}


function check(className,sele){
    var arr=className.split(" ");
    for(var i=0;i<arr.length;i++){
        if(arr[i].className==sele){
            return true;
        }
        return false;   
    }   
}



// 2.兼容的设置获取元素的文本内容
// 如果要传的是0  或者text能用 但是传的是一个空值  那么出来的是一个空字符串
// classname 兼容性
function contentText(obj,value){
    if(value==undefined){
        if(obj.textContent!=undefined){
           return obj.textContent
        }else{
            return obj.innnerText
        }
    }else{
         if(obj.textContent!=undefined){
           obj.textContent=value;
        }else{
           obj.innnerText=value;
        }
    }
}

// var look=document.getElementsByClassName("look")[0];
// var ins=document.getElementsByClassName("in")[0];
// var inss=document.getElementsByClassName("inss")[0];
//   ins.onclick=function(){
//     contentText(look,inss.value)
//   }

 // var a=document.getElementsByTagName("a")[0];
 // var img=document.getElementsByTagName("img")[0];
 // a.href='2.html'

 //获取通用样式
function getStyle(obj,arrt){               
  //arrt代表对象的属性
    if(obj.currentStyle){
        // IE下可以使用
         return obj.currentStyle[arrt];
    }else{
        // 火狐中使用
       return getComputedStyle(obj,null)[arrt];
    }
}
// alert(getStyle(look,"width"))
 
//3.类名调用

function $(seletor,obj){
    var obj = obj || document;
    if (typeof seletor=="string") {
        if (seletor.charAt(0)==".") {
            return getClass(seletor.slice(1),obj);
        }else if(seletor.charAt(0)=="#"){
            return obj.getElementById(seletor.slice(1));
        }else if(/^[a-z|1-6]{1,10}$/g.test(seletor)){
            return obj.getElementsByTagName(seletor);
        }
    }else if (typeof seletor=="function"){
        window.onload=function(){
            seletor()
        }
    }
}

//调用方法
/*
$(function(){
    var aa = $(".aa");
    //获取到所有类名是aa的元素
    var bb = $("#bb");
    //获取到所有类名是bb的元素
    var div = $("div");
    //获取到所有类名是div的元素
    
})

*/
// 4.eval兼容问题
function evals(str){
    if (typeof str!='string') {
        return;
    }
    if (window.execScript){
        window.execScript(str)
    }else{
        window.eval(str)
    }
}

// 调用方法：
// function aa(){
//     evals('var c="后盾网"')
//     alert(c);
// }
// aa();
// alert(c);

// 获取某一个元素文档坐标的方式
function getPosition(obj){
    var ot=obj.offsetTop;
    var parent=obj.parentNode;
    while(parent.nodeName!="BODY"){
        var pos=getStyle(parent,"position")
        var width=parseInt(getStyle(parent,"borderTopWidth"))
        if (pos=="absolute"||pos=="relative") {
            ot+=parent.offsetTop+width;
        };
        parent=parent.parentNode;
    }
    return ot;
}











