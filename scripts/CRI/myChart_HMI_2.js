var myChart_HMI_2 = echarts.init(document.getElementById('HMI_2'));


var dataGZ = [
    [1,26,37,27,1.163,27,13,"优"],
    [2,85,62,71,1.195,60,8,"良"],
    [3,78,38,74,1.363,37,7,"良"],
    [4,21,21,36,0.634,40,9,"优"],
    [5,41,42,46,0.915,81,13,"优"],
    [6,56,52,69,1.067,92,16,"良"],
    [7,64,30,28,0.924,51,2,"良"],
    [8,55,48,74,1.236,75,26,"良"],
    [9,76,85,113,1.237,114,27,"良"],
    [10,91,81,104,1.041,56,40,"良"],
    [11,84,39,60,0.964,25,11,"良"],
    [12,64,51,101,0.862,58,23,"良"],
    [13,70,69,120,1.198,65,36,"良"],
    [14,77,105,178,2.549,64,16,"良"],
    [15,109,68,87,0.996,74,29,"轻度污染"],
    [16,73,68,97,0.905,51,34,"良"],
    [17,54,27,47,0.592,53,12,"良"],
    [18,51,61,97,0.811,65,19,"良"],
    [19,91,71,121,1.374,43,18,"良"],
    [20,73,102,182,2.787,44,19,"良"],
    [21,73,50,76,0.717,31,20,"良"],
    [22,84,94,140,2.238,68,18,"良"],
    [23,93,77,104,1.165,53,7,"良"],
    [24,99,130,227,3.97,55,15,"良"],
    [25,146,84,139,1.094,40,17,"轻度污染"],
    [26,113,108,137,1.481,48,15,"轻度污染"],
    [27,81,48,62,1.619,26,3,"良"],
    [28,56,48,68,1.336,37,9,"良"],
    [29,82,92,174,3.29,0,13,"良"],
    [30,106,116,188,3.628,101,16,"轻度污染"],
    [31,118,50,0,1.383,76,11,"轻度污染"]
];

var schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: '维修指数(CRI)'},
    {name: 'PM25', index: 2, text: '每单维修成本'},
    {name: 'PM10', index: 3, text: '平均维修事件'}
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

var option_HMI_2 =  {
    color: [
        '#34d65d'
    ],
    title: [ {
        text: '医院维修指数CRI',
        left: '48%',
        top: '2%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"16"
        }
    },{
        text: '气泡越大，维修次数越多',
        left: '86%',
        top: '10%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"14"
        }
    }],
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            //自定义函数 显示提示信息
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
        },
            //显示做表线        
            axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    xAxis: {
        type: 'value',
        name: '维修指数CRI',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 31,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '维修成本\n(元/单)',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            show:false,
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [25, 25]
            },
            outOfRange: {
                symbolSize: [25, 25],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
            outOfRange: {
                    color: ['#444']
                }
            }
        },
        {
            show:false,
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                colorLightness: [1, 0.5]
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '华山北院',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
        }
    ]
};
myChart_HMI_2.setOption(option_HMI_2);