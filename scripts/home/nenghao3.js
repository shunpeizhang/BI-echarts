$(document).ready(function() {
	
	shuju()
	function shuju() {
//		测试
		var data={
		"value":"68",
		"percent":"15/25"
	}
	nenghao(data.value)
	$("#cont2313").parent().children("p:nth-child(2)").html(data.percent)	
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/nenghao3",
//			async:true,
//			success:function(data) {
//				nenghao(data.value)
//				$("#cont2313").parent().children("p:nth-child(2)").html(data.percent)
//			}
//		});
	}
	
	function nenghao (value) {
		

		var myChart3 = echarts.init(document.getElementById('cont2313'));
		var value=value;
		option = {
		    title: {
		        text: value+'%',
		        x: 'center',
		        y: 'center',
		        textStyle: {
		            fontWeight: 'normal',
		            color: "#0AD2D3",
		            fontSize: '20'
		        }
		    },
		    tooltip: {
		        show: false,
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        show: false,
		        itemGap: 12,
		        data: ['01', '02']
		    },
		    toolbox: {
		        show: false,
		        feature: {
		            mark: {
		                show: true
		            },
		            dataView: {
		                show: true,
		                readOnly: false
		            },
		            restore: {
		                show: true
		            },
		            saveAsImage: {
		                show: true
		            }
		        }
		    },
		    series: [{
		            name: 'Line 1',
		            type: 'pie',
		            clockWise: false,
		            radius: ['68%', '72%'],
		            itemStyle: {
					    normal: {
					    	color: '#0AD2D3',
					        label: {
					            show: false
					        },
					        labelLine: {
					            show: false
					        },
					        shadowBlur: 40,
					        shadowColor: 'rgba(40, 40, 40, 0.5)',
					    }
					},
		            hoverAnimation: false,
		
		            data: [{
		                    value: value,
		                    name: '01'
		                }, {
		                    value: 100-value,
		                    name: 'invisible',
		                    itemStyle: {
							    normal: {
							        color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
							        label: {
							            show: false
							        },
							        labelLine: {
							            show: false
							        }
							    },
							    emphasis: {
							        color: 'red'//未完成的圆环的颜色
							    }
							}
		                }
		
		            ]
		        }, {
		            name: 'Line 2',
		            type: 'pie',
		            animation: false,
		            clockWise: false,
		            radius: ['85%', '86.5%'],
		            itemStyle: {
					    normal: {
					    	color: '#3b3f5e',
					        label: {
					            show: false
					        },
					        labelLine: {
					            show: false
					        },
					        shadowBlur: 40,
					        shadowColor: '#3b3f5e',
					    }
					},
		            hoverAnimation: false,
		            tooltip: {
		                show: false
		            },
		            data: [{
		                    value: 100,
		                    name: '02',
		                    itemStyle: {
		                        emphasis: {
		                            color: '#3b3f5e'
		                        }
		                    }
		                }, {
		                    value: 0,
		                    name: 'invisible',
		                    itemStyle: {
							    normal: {
							        color: '#3b3f5e',//未完成的圆环的颜色
							        label: {
							            show: false
							        },
							        labelLine: {
							            show: false
							        }
							    },
							    emphasis: {
							        color: '#3b3f5e'//未完成的圆环的颜色
							    }
							}
		                }
		
		            ]
		        },
		
		
		    ]
		};
		
		

		myChart3.setOption(option);
	
		$(window).resize(function() {

			myChart3.resize()
		})
		
		
		
		
		
	}
	
	
	
	
})
