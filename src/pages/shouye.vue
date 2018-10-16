<template>
	<div class="scrollbar" style="position:relative;">
		<img src="../assets/bj.jpg" style="width:100%;"/>
		<i class="iconfont icon-down"></i>
		<div class="title">
			<h1>我是liulong</h1>
			欢迎走进我的世界
		</div>
		<div class="contentBox">
			<div class="left">
				<h1>Podcast RSS Editor</h1>
				
				Web App Design / Development<br/>
				More details on Behance Open sourced on GitHub
			</div>
			<div class="imgBox">
				<img class="img" src="../assets/pre-bg.jpg"/>
			</div>
		</div>
		<div class="contentBox">
			<div class="left">
				<h1>Podcast RSS Editor</h1>
				
				Web App Design / Development<br/>
				More details on Behance Open sourced on GitHub
			</div>
			<div class="imgBox">
				<img class="img" src="../assets/pre-bg.jpg"/>
			</div>
		</div>
		<div class="contentBox">
			<div class="left">
				<h1>Podcast RSS Editor</h1>
				
				Web App Design / Development<br/>
				More details on Behance Open sourced on GitHub
			</div>
			<div class="imgBox">
				<img class="img" src="../assets/pre-bg.jpg"/>
			</div>
		</div>
	</div>
</template>
<style type="text/css">

</style>
<script>
  export default {
    data() {
      return {
      };
    },
    components: {},
    mounted(){
		this.xiangxia();
    },
    methods: {
    	xiangxia(){
			let down = document.querySelectorAll('.iconfont')[0];
			setInterval(function(){
				var color1 = 'rgba('+random()+','+random()+','+random()+',1)';
				var color2 = 'rgba('+random()+','+random()+','+random()+',1)';
				down.style.background = 'linear-gradient(to top,'+color1+','+color2+')';
				down.style.webkitBackgroundClip = 'text';
				down.style.color = 'transparent';
			},500)
			function random(a=0,b=255){
				return parseInt(Math.random()*(b-a+1)+a)
			}
		},
    },

  }

</script>
<style scoped lang="scss">
@import url("../assets/font/iconfont.css");
.title{
	position:absolute;
	top:8%;
	left:20%;
	color:white;
	font-size:30px;
}
.iconfont{
	position:fixed;
	bottom:8%;
	left:50%;
	transform: translate(-50%,0);
	font-size:50px;
	cursor:pointer;
   animation:bianse 2s infinite alternate;
}

@keyframes bianse{
	0%{
		opacity:0;
	}
	100%{
		opacity:1;
	}
}

.contentBox{
	display:flex;
	justify-content:space-between;
	background: #ece9e9;
    /*margin: 0.1% 0.1% 0;*/
    /*border-radius: .6rem;*/
    position: relative;
    overflow: hidden;
    flex-wrap:wrap;
}
.left{
	margin:10% 0 0 10%;
}
.img{
	width:100%;
}
@media only screen and (min-width:800px) {
	.imgBox{
		width:60%;
	}
	.contentBox{
	    flex-wrap:nowrap;
	}
}
@media only screen and (min-width:0px)and (max-width:800px) {
	.title{
		
		font-size:10px;
	}
	.imgBox{
		width:100%;
	}
}


</style>
