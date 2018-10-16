<!--调用方法-->
<!--
	import uploadImg from '@/components/imgs.vue'
	<uploadImg class="imgcss" :imgUrl='item.picUrl' :Size="1" @getVal='v=>item.picUrl=v'></uploadImg>
		
	imgUrl:'',				//给地址可以回显
	size:0.15,				//图片大小
-->

<template>
	<el-upload class="avatar-uploader"
		action='http://jjdcjavaweb.oss-cn-shanghai.aliyuncs.com' 
		:data="Token" 
		accept="image/jpg,image/jpeg,image/png" 
		:show-file-list="false" 
		:on-success="handleAvatarSuccess" 
		:before-upload="beforeAvatarUpload">
		<img v-if="imgUrl" :src="imgUrl" class="avatar">
		<i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>
</template>

<script>
	import {uploadImg,} from "@/config/api.js";
	export default {
		data() {
			return {
//				imgUrl:"",
				Token:{},
				size:this.Size?this.Size:3,
				addName:'addImg',
			}
		},
		props: {
			imgUrl:{
				type: String,
			},
			Size: {
				type: Number,
			}
		},
		mounted() {
//			console.log(this.uploadTitle)
		},
		methods: {
			//上传图片
			beforeAvatarUpload: function (file) {
		        var that = this;
		        if (file.type=="image/jpeg" || file.type=="image/jpg"|| file.type=="image/png") {
		          return new Promise(function (resolve,reject) {
		          	if (file.size < 1024*1024*that.size && !/[\u4E00-\u9FA5]/g.test(file.name)) {
		          		that.uploadImg(file).then((data)=>{
          				that.Token = data
					        that.Token.key = that.Token.dir + '/' + (+new Date()) + file.name
					        that.Token.OSSAccessKeyId = that.Token.accessid
		          			resolve()
		          		})
		            } else {
		            	let sizeTitle = "";
		            	if(that.size>=1){
		            		sizeTitle = that.size+"M";
		            	}else{
		            		sizeTitle = (that.size*1000)+"kb"
		            	}
		            	that.$message.warning("图片大小不要超过"+sizeTitle+"且名称不含中文！！！")
		            	reject(new Error("图片大小不要超过"+sizeTitle+"且名称不含中文"));
		            }
		          })
		        } else {
		        	that.$message.warning("上传文件只能是 jpg、jpeg、png格式！")
		        }
	      	},
			async uploadImg(file){
				var that = this
				try{
					const jsonData = await uploadImg({'user_dir':this.addName});
//					console.log(jsonData)
					if (jsonData.data.code == 0){
						return jsonData.data.data;
				    }
				}catch(e){
					console.log(e)
				}
			},
		    
			handleAvatarSuccess: function () {
				let imgSrc = 'http://jjdcjavaweb.oss-cn-shanghai.aliyuncs.com/' + this.Token.key;
			    //传值给调用者
				this.$emit('getVal',imgSrc)
		    },
		},
	}
</script>

<style scoped>
	/*上传图片设置*/
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
	}
	.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:375px;
    height:120px;
    line-height:120px;
    background:gainsboro;
    text-align: center;
    border-radius: 4px;
	}
	.avatar {
    width:375px;
    height:120px;
    display: block;
    border-radius: 4px;
	}
</style>