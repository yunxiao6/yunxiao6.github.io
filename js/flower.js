	var number=500;
		var X=0;
		var Y=0;
		var text = document.getElementById("text");
		function flower(x,y,Image,speed){// 定义一个  樱花 类 
			this.x=x;  //位置
			this.y=y;
			this.img=Image;//图片
			this.speed=speed;  //下落的速度
		}
		var imgs=new Array("../img/flower/flower%20(1).png","../img/flower/flower%20(2).png","../img/flower/flower%20(3).png","../img/flower/flower%20(4).png","../img/flower/flower%20(5).png","../img/flower/flower%20(6).png","../img/flower/flower%20(7).png");
		var flowers=new Array();
		var c=document.getElementById("canvas");
		var  locations=new Array();
		var cxt = c.getContext("2d");
		for(var i=0;i<number;i++){
			var x=Math.random()*1800+20;
			var y=2000*Math.random();
			var img=new Image();
			var index=getIndex();
			img.src=imgs[index];
			var speed=Math.random()*0.5+0.5;
			flowers[i]=new flower(x,y,img,speed);
			}
		function getIndex(){
			var num=Math.floor(Math.random()*7);
			return num;
		}
		function draw(){
			cxt.clearRect(0,0,c.width,c.height);
			for(var index=0;index<number;index++){
				move(flowers[index]);
				cxt.drawImage(flowers[index].img,flowers[index].x,flowers[index].y);
				}
			}
		function move(f){
			if(f.y>1080){
				f.speed=Math.random()*0.5+0.5;
				f.y= -1000*Math.random();
			}
			f.y+=f.speed;
		}
		window.setInterval("draw()",1);