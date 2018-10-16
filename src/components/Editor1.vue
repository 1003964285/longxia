<!---->


<template>
	<div>
		<div>
			<quill-editor class='editor' v-model="intro" ref="newEditor" @blur="transmit" ></quill-editor>
			<el-upload style="display:none" 
				action='http://jjdcjavaweb.oss-cn-shanghai.aliyuncs.com' 
				accept = "image/jpg,image/jpeg,image/png" 
				:show-file-list="false" 
				:data="Token" 
				:before-upload='newEditorbeforeupload' 
				:on-success='newEditorSuccess' 
				ref="uniqueId" 
				class="uniqueId">
			</el-upload>
		</div>
	</div>
</template>

<script>
	import {uploadImg } from "@/config/api.js";
	export default {
		data() {
			return {
				intro: '',
				addImgRange: '',
				Img: '',
				Token: {},
			}
		},
		components: {

		},
		computed: {

		},
		mounted() {
			//点击富文本上传图片图标给上传图片组件赋点击事件
			var imgHandler = async function(state) {
				if(state) {
					var fileInput = document.querySelector('.uniqueId input') //隐藏的file元素
					fileInput.click() //触发事件
				}
			}
			this.$refs.newEditor.quill.getModule("toolbar").addHandler("image", imgHandler)
		},
		methods: {
			//传值给调用者
			transmit() {
				this.$emit("getVal",this.intro)
			},
			//上传图片
			async uploadImg(file) {
				var that = this
				try {
					const jsonData = await uploadImg({
						'user_dir': 'test'
					});
					if(jsonData.data.code == 0) {
						return jsonData.data.data;
					}
				} catch(e) {
				}
			},
			newEditorbeforeupload(file) {
				var that = this;
				if(file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "image/png") {
					return new Promise(function(resolve, reject) {
						if(file.size < 1024 * 1024 * 0.5 && !/[\u4E00-\u9FA5]/g.test(file.name)) {
							that.uploadImg(file).then((data) => {
								that.Token = data
								that.Token.key = that.Token.dir + '/' + (+new Date()) + file.name
								that.Token.OSSAccessKeyId = that.Token.accessid
								that.Img = 'http://jjdcjavaweb.oss-cn-shanghai.aliyuncs.com/' + that.Token.key
								resolve()
							})
						} else {
							that.$message.warning("图片大小不要超过3M且名称不含中文！！！")
							reject(new Error("图片大小不要超过3M且名称不含中文"));
						}
					})
				} else {
					that.$message.warning("上传文件只能是 jpg、jpeg、png格式！")
				}
			},
			//上传图片成功回调 
			newEditorSuccess(response, file, fileList) {
//				console.log(this.$refs.newEditor.quill)
				let s = this.$refs.newEditor.quill;
				s.insertEmbed(s.getSelection().index, 'image', this.Img)
			},
		},
	}
</script>

<style scoped lang="scss">
	.editor {
		width: 700px;
		height: 180px;
	}
</style>