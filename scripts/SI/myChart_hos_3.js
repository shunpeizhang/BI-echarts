var myChart_hos_1 = echarts.init(document.getElementById('hos_1'));
var defaultFontSize = 14,
    defaultTextColor = '#fff',
    defaultGlobalColor = ['#a40000', '#25b725'],
    defaultFontFamily = 'microsoft yahei',
    defaultBackgroundColor = '#fff',
    defaultShadowColor = 'rgba(204, 214, 235, 0.247059)';
 var  option_hos_1 = {
  title: [ ],
    // backgroundColor: defaultBackgroundColor, // 背景色，默认无背景。
    color: defaultGlobalColor, // 调色盘颜色列表。
    textStyle: { // 全局字体样式
        color: defaultTextColor,
        fontSize: defaultFontSize
    },
    legend: {
        icon:'diamond',
        orient: 'horizontal',
        bottom : "bottom",
        left: "center",
        itemWidth: 10,
        itemHeight: 10,
        width: 500,
        itemBorderRadius: 8,
        textStyle: {
            color: "#d7d7d7"
        },
        data: ['标准医院指数', '本医院指数']
    },
    tooltip: { // 提示框组件
    	show:true,
        trigger: 'item', // 触发类型 可选为：'axis' | 'item' | 'none'
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: defaultShadowColor
            }
        }
    },
    radar: {
        // shape: 'circle',
        //设置雷达图的位置，
        center: ['45%', '50%'],
        //设置雷达图的大小，
        radius: 70,
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: ['#3d3d3d', '#3d3d3d', '#eae9e9']
            }
        },
        splitNumber: 2,//间隔
        axisLine: {
            lineStyle: {
                color: '#3d3d3d'
            }
        },
        indicator: [{
            name: '开机指数',
            max: 30
        }, {
            name: '故障指数',
            max: 30
        }, {
            name: '事故指数',
            max: 30
        }, {
            name: '强检过期指数',
            max: 30
        }, {
            name: '设备年限指数',
            max: 30
        },{
            name: '维保达成指数',
            max: 20
        }]
    },
    series: [{
        name: '雷达图',
        type: 'radar',
        symbol: 'none',
        // areaStyle: {
        //     normal: {
        //         opacity: .4
        //     }
        // },
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 2
                }
            },
            emphasis: {
                areaStyle: {
                    opacity: .3
                }
            }
        },
        data: [{
            value: [17.2, 7.9, 1.6, 0.8, 0.8],
            name: '本医院指数',
            z: 3
        }, {
            value: [5.4, 2.6, 1.2, 1.0, 0.5],
            name: '标准医院指数',
            z: 1
        }]
    }]
};
myChart_hos_1.setOption(option_hos_1);