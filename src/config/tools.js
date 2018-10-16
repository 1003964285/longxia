export default class Ts{
	//判断一个变量是否为空值 isEmpty()  
	static isEmpty(value) {
		//[],{},'','  ',null,undefined,NaN都返回为true
		value = typeof value == 'string'?value.replace(/\s/g,''):value;//去掉空格判断
		value = value == 0?String(value):value;//如果数字0变成字符串判断
		if(value){
			return (Array.isArray(value) && value.length === 0) || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0);
		}else{
			return true;
		}
	}
	//得到状态值对应的值
	static getVal(arr_,label_){
		for(let i=0;i<arr_.length;i++){
			if(arr_[i].value == label_){
				return arr_[i].label;
				break
			}
		}
	}
	//随机生成字符串num长度
	static randomStr(num){
		var str = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var newstr = "";
		for(var i=0;i<num;i++){
			var s = parseInt(Math.random()*(str.length));
			newstr = newstr+str[s];
		}
		return newstr;
	}
}

export let D = {
	listType:[
		{value:'1',label:'未安排'},
		{value:'2',label:'待上课'},
		{value:'3',label:'已完成'},
		{value:'4',label:'已退课'},
	]
}
