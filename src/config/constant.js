var env = 'develop';

let config = {}

if(env == 'develop') {
	//开发
	config = {
    apiPrefix1: "http://192.168.0.164",//卢银龙
    apiPrefix2: "http://192.168.0.167:10013",//字典
	} 
} else if( env == 'test'){
	//测试
	config = {
    apiPrefix1:"http://47.100.131.56:10010",//测试
    apiPrefix2:"http://139.196.194.172:10013" //字典
	}
} else {
	//生产
	config = {
    apiPrefix1:"http://operateweb.99bicycle.com:10007",
    apiPrefix2: "http://operateweb.99bicycle.com:10013" 
	}
}

export default config;