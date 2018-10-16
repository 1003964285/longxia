// 百度地图API功能
var zmap = function(id) {
	// 百度地图API功能
	var map = new BMap.Map(id, {
		enableMapClick: false
	}); // 创建Map实例
	map.centerAndZoom(new BMap.Point(120.398356, 36.091259), 13); // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

//	map.setMapStyle({
//		styleJson: [{
//			"featureType": "all",
//			"elementType": "all",
//			"stylers": {
//				"lightness": 61,
//				"saturation": -100
//			}
//		}]
//	});
	var client = new XMLHttpRequest();
	client.open("GET", "./static/wanxiangcheng.csv");
	client.onreadystatechange = function() { // 状态发生变化时，函数被回调
		console.log("2222222222222");
		if(client.readyState === 4) { // 成功完成
			// 判断响应结果:
			if(client.status === 200) {
				// 成功，通过responseText拿到响应的文本:
				console.log(client.responseText, "2222222222222");
				var options = {
					size: 800,
					globalAlpha: 0.6,
					unit: 'm',
					strokeStyle: 'rgba(0, 0, 255, 1)', // 描边颜色
      lineWidth: 1, // 描边宽度
					zIndex: 2,
					max: 6,
					methods: { // 一些事件回调函数
						click: function(item) { // 点击事件，返回对应点击元素的对象值
							console.log(item);
							
						},
//						mousemove: function(item) { // 鼠标移动事件，对应鼠标经过的元素对象值
//							console.log(item);
//						}
					},
					gradient: {
//						0.25: "rgba(0,0,255,0.6)",
//						0.55: "rgba(0,255,0,0.6)",
//						0.85: "rgba(255,255,0,0.6)",
//						1.0: "rgba(255,0,0,0.6)"
					},
					coordType: 'bd09mc',
					draw: 'grid'
				}

				var dataSet = mapv.csv.getDataSet(client.responseText);
				
				dataSet.initGeometry();
console.log(dataSet)
				new mapv.baiduMapLayer(map, dataSet, options);
			} else {
				// 失败，根据响应码判断失败原因:
				return;
			}
		} else {
			// HTTP请求还在继续...
		}
	}
	client.setRequestHeader("Accept", "application/json");
	client.send();
}
export default zmap