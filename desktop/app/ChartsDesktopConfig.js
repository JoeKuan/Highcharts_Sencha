var speedColor = '#474337';
var rpmColor = '#BBB59C';
var kmhArr = [ 0, 20, 40, 60, 90, 120, 150, 180, 210 ];
var hiRef = '#A41E09';
var dialColor = '#FA3421';
var currentRpm = 0;

Ext.define ("Highcharts.ChartsDesktopConfig", {
    singleton: true,
    config : {
        spline : {
            series : [{
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                dataIndex : 'today',
                name : 'Today'
            }],
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x',
                    type: 'spline'
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /****************************************************
         *  spline chart with no animation on
         ****************************************************/
        splineNoAnim : {
            series : [{
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                getData: function(record, index) {
                    return record.data.today;
                },
                name : 'Today'
            }],
            animation: false,
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x',
                    defaultSeriesType: 'spline'
                },
                title : {
                    text : 'No Animation for initial and update, ignore Highcharts animation configuration',
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*********************************************
         *    Spline - line shift with X-axis category data
         *********************************************/
        splineCatShift : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today'
            }],
            lineShift: true,
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'Click Reload Data to see the lines are being shift, xAxis categories data.',
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*********************************************
         *    Spline - line shift with X-axis numeric data
         *********************************************/
        splineNumShift : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday',
                xField : 'time'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today',
                xField : 'time'
            }],
            lineShift: true,
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'Click Reload Data to see the lines are being shift, xAxis numeric data',
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    type: 'datetime',
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35
                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /***
         * Test redraw hidden series
         */
        drawHiddenSeries : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday',
                xField : 'time'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today',
                xField : 'time',
                visible: false
            }],
            lineShift: true,
            height : 500,
            width : 700,
            listeners: {
                afterChartRendered: function() {
                    // Test draw method on the hidden series
                    var task = new Ext.util.DelayedTask(function(){
                        Ext.getCmp('main_chart').draw();
                    });
                    task.delay(2000);
                }
            },
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : 'Test draw method on hidden series',
                    x : -20 //center
                },
                subtitle : {
                    text : 'draw method is called every 2 seconds',
                    x : -20
                },
                xAxis : {
                    type: 'datetime',
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35
                    }
                },
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*********************************************
         *    Spline - ExtJs Popup menu
         *********************************************/
        splinePopup : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday',
                cursor: 'pointer',
                events: {
                    click: function(evt) {
                        Demo.menu && (Demo.menu.destroy()) && (Demo.menu = null);
                        Demo.menu = Ext.create('Ext.menu.Menu', {
                            width: 200,
                            title: 'Series Menu',
                            margin: '0 0 10 0',
                            items: [{
                                text: 'Plot Average',
                                scope: this,
                                handler: function() {
                                    var average = 0;
                                    Ext.each(this.points, function(point) {
                                        average += point.y;
                                    });
                                    average = average / this.points.length;

                                    this.yAxis.removePlotLine('average');
                                    this.yAxis.addPlotLine({
                                        id: 'average',
                                        value: average,
                                        width: 2,
                                        dashStyle: 'dashdot',
                                        color: '#80CC99',
                                        label: {
                                            text: 'Average: ' + average
                                        }
                                    });
                                }
                            },{
                                text: 'Remove Average Plot',
                                scope: this,
                                handler: function() {
                                    this.yAxis.removePlotLine('average');
                                }
                            }, '-', {
                                text: 'Cancel',
                                handler: function() {
                                    Demo.menu.close();
                                }
                            }]
                        }); 
                        Demo.menu.showAt(evt.point.pageX + 5, evt.point.pageY + 5);
                    }
                },
                xField : 'time'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today',
                xField : 'time',
                point: {
                    cursor: 'pointer',
                    events: {
                        click: function(evt) {
                            Demo.menu && (Demo.menu.destroy()) && (Demo.menu = null);
                            Demo.menu = Ext.create('Ext.menu.Menu', {
                                width: 200,
                                title: 'Point Menu',
                                margin: '0 0 10 0',
                                items: [{
                                    text: 'Compare Temperature',
                                    scope: this,
                                    handler: function() {
                                        // compare the temperation with another series
                                        var temp = this.y, time = this.x, diff = 0;
                                        Ext.each(this.series.chart.series[0].points, function(point) {
                                            if (point.x == time) {
                                                diff = point.y - temp;
                                                return false;
                                            }
                                        });
                                        var msg = 'Same as yesterday temperature';
                                        if (diff < 0) {
                                            msg = 'Today is ' + Math.abs(diff) + ' &#x2103 hotter than yesterday';
                                        } else {
                                            msg = 'Today is ' + Math.abs(diff) + ' &#x2103 colder than yesterday';
                                        }
                                        Ext.Msg.alert('Info', msg);
                                    }
                                }, '-', {
                                    text: 'Cancel',
                                    handler: function() {
                                        Demo.menu.close();
                                    }
                                }]
                            });
                            Demo.menu.showAt(evt.point.pageX + 5, evt.point.pageY + 5);
                        }
                    }
                }
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'Left click on Yesterday series for series menu and left click on Today series for point menu',
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    type: 'datetime',
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35
                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*********************************************
         *    Spline - afterChartRendered callback 
         *********************************************/
        splineAfterRenderedCallback : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday',
                xField : 'time'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today',
                xField : 'time'
            }],
            listeners: {
                afterChartRendered: function(chart) {
                    var size = this.getSize();
                    var temp = 0;
                    Ext.each(chart.series[0].data, function(data) {
                        temp += data.y;
                    });
                    temp = temp / chart.series[0].data.length;

                    Ext.Msg.alert('Info', 'This message box is called after the chart is rendered. ' + 
                                  'Extension width:' + size.width + ', height: ' + size.height + '. ' +
                                  'Series (' + chart.series[0].name + ') Average: ' + temp);
                }
            },
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'A message box is displayed after the chart is rendered and shows the average value',
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    type: 'datetime',
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35
                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*********************************************
         *    Spline - addSeries
         *********************************************/
        splineAddSeries : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today'
            }],
            xField : 'time',
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x',
                    events: {
                        load: function(chart) {
                            Ext.getCmp('addSeries').setDisabled(false);
                        }
                    }
                },
                title : {
                    text : "Click on the 'Add Series' button to add a new series without store data",
                    x : -20 //center
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer'
                    }
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /****************************************************************************
         *    Spline - No Store binding  
         ****************************************************************************/
        splineNoStore : {
            height : 500,
            width : 700,
            initAnimAfterLoad: false,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    showAxes: true,
                    events: {
                        load: function(chart) {
                            Ext.getCmp('addSeries').setDisabled(false);
                        }
                    }
                },
                title : {
                    text : "Extension running without store - only use addSeries method to display series data",
                    x : -20 //center
                },
                subtitle : {
                    text : "Click 'Add Series' to display series",
                    x : -20
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /****************************************************************************
         *    Spline - Irregular data of 3 series with random number of data points  
         ****************************************************************************/
        splineIrregular : {
            series : [{
                type : 'spline',
                dataIndex : 'series1',
                name : 'series A'
            }, {
                type : 'spline',
                dataIndex : 'series2',
                name : 'series B'
            }, {
                type : 'spline',
                dataIndex : 'series3',
                name : 'series C'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Irregular data of 3 series with random number of data points",
                    x : -20 //center
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*********************************************
         *    Spline - null data, discontinued graph 
         *********************************************/
        splineNullData : {
            series : [{
                type : 'spline',
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                type : 'spline',
                dataIndex : 'today',
                name : 'Today'
            }],
            xField : 'time',
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : "Discontinued graph - data contain null values.",
                    x : -20 //center
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer'
                    }
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*************************************************
         * Column config
         *************************************************/
        column3d : {
            series : [{
                type : 'column',
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                type : 'column',
                dataIndex : 'today',
                name : 'Today'
            }],
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x',
		    options3d: {
			enabled: true,
			alpha: 15,
			beta: 15,
			depth: 50
		    },
		    type: 'column'
                },
		plotOptions: {
		    column: {
			depth: 25
		    }
		},
                title : {
                    text : 'Multi Series 3D column chart',
                    x : -20 //center
                },
                subtitle : {
                    text : "Click 'Reload Data' to see the 3D columns animate",
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },
        /*************************************************
         * Column config
         *************************************************/
        column : {
            series : [{
                type : 'column',
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                type : 'column',
                dataIndex : 'today',
                name : 'Today'
            }],
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /*************************************************************
         * Column drill down config with button click
         *************************************************************/
        columnDrillDown : {
            series : [{
                type : 'column',
                dataIndex : 'usage',
                colorField: 'color',
                // Set this to white, so won't interfere with the series
                // index color
                name: 'Browser brands'
            }],
            xField: 'vendor',
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'Column drill down demo. Click a column to drill down further (issues a load event)',
                    x : -20 //center
                },
                yAxis : {
                    title : {
                        text : 'Total percent market share'
                    }
                },
                legend: { enabled: false },
                plotOptions: {
                    column: {
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: Highcharts.getOptions().colors[0],
                            style: {
                                fontWeight: 'bold'
                            },
                            formatter: function() {
                                return this.y +'%';
                            }
                        },
                        point: {
                            events: {
                                click: function(evt) {
                                    var selectPoint = this;
                                    var store = Ext.getCmp('main_chart').store;
                                    var extraParams = store.getProxy().extraParams;

                                    // Flick store params
                                    if (extraParams.total) {
                                        delete extraParams.total;
                                        extraParams.browser = this.category;
                                    } else {
                                        extraParams.total = true;
                                        delete extraParams.browser;
                                    }

                                    // Because this extension has already binded store,
                                    // that means the chart will automatically after
                                    // load method is finished
                                    store.load();
                                }
                            }
                        }
                    }
                },
                tooltip : {
                    formatter : function () {
                        var point = this.point,
                        s = this.x +':<b>'+ this.y +'% market share</b><br/>';
                        if (point.drilldown) {
                            s += 'Click to view '+ point.category +' versions';
                        } else {
                            s += 'Click to return to browser brands';
                        }
                        return s;
                    }
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        pie3d : {
            series : [{
                type : 'pie',
                categorieField : 'time',
                dataField : 'temperature',
                name : 'Temperature'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
		    type: 'pie',
		    options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		    }
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                plotOptions: { 
                    pie: { 
			depth: 35,
                        allowPointSelect: true 
                    } 
                },
                tooltip : {
                    formatter : function () {
                        return '<b>' + this.point.name + '</b>' + ',temperature is : ' + this.y;
                    }
                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        pie : {
            series : [{
                type : 'pie',
                categorieField : 'time',
                dataField : 'temperature',
                name : 'Temperature'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
                    x : -20
                },
                plotOptions: { 
                    pie: { 
                        allowPointSelect: true 
                    } 
                },
                tooltip : {
                    formatter : function () {
                        return '<b>' + this.point.name + '</b>' + ',temperature is : ' + this.y;
                    }
                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        scatter3d : {
            series : [{
                type : 'scatter',
                xField: 'x',
		yField: 'y',
		zField: 'z'
            }],
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginTop : 130,
                    zoomType : 'x',
		    options3d: {
			enabled: true,
			alpha: 20,
			beta: 30,
			depth: 200,
			viewDistance: 10,
			frame: {
			    bottom: {
				size: 1,
				color: 'rgba(0,0,0,0.05)'
			    }
			}
		    }
                },
                title : {
                    text : '3D Scatter Chart with (x, y, z) coordinates'
                },
                subtitle : {
                    text : "Click 'Reload Data' to see the data points animate in 3D space"
                },
                yAxis : {
		    min: 0,
		    max: 10
		},
		xAxis: {
		    min: 0,
		    max: 10,
		    gridLineWidth: 1
		},
		zAxis: {
		    min: 0,
		    max: 10,
		    gridLineWidth: 1
		},
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        scatter : {
            series : [{
                type : 'scatter',
                lineWidth : 1,
                xField: 'rebars_x',
                yField: 'rebars_y'
            }, {
                type : 'scatter',
                lineWidth : 0,
                xField: 'points_x',
                yField: 'points_y'
            }],
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x : -20 //center
                },
                subtitle : {
                    text : 'Scatter Values',
                    x : -20
                },
                xAxis : [{
                    labels : {
                        rotation : 270,
                        y : 35
                    }
                }],
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        donut : {
            series : [{
                type : 'pie',
                categorieField : 'vendor',
                dataField: 'usage',
                name: 'Browsers',
                size: '60%',
                totalDataField: true,
                colorField: 'color',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                type : 'pie',
                categorieField : 'version',
                dataField: 'usage',
                colorField: 'color',
                name: 'Versions',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                    }
                }
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Donut Pie for ExtJs ' + Ext.versions.core.version
                },
                subtitle : {
                    text : 'Browser market share, April, 2011'
                },
                tooltip : {
                    formatter : function () {
				                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                    }
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        areaRangeSorted: {
            series : [{
                type : 'areasplinerange',
                minDataIndex: 'low',
                maxDataIndex: 'high'
            }],
            xField: 'date',
            height : 500,
            width : 700,
            chartConfig : {
                chart: {
                },
                title: {
                    text: 'Stock price from 28th Aug 2012 to 20th Sept 2012 - Apple (AAPL)'
                },
                subtitle: {
                    text: 'High & Low range'
                },
                legend: { enabled: false },
                credits: {
                    text: 'Learning Highcharts'
                },
                xAxis: {
                    title: {
                        text: 'Date',
                        align: 'high'
                    },
                    labels: {
                        rotation: -45,
                        align : 'center',
                        y: 40,
                        x: -20
                    }
                },
                yAxis: {
                    title: {
                        text: 'Price ($)'
                    }
                }
            }
        },

        areaRangeUnsorted: {
            series : [{
                type : 'arearange',
                dataIndex: [ 'open', 'close' ]
            }],
            xField: 'date',
            height : 500,
            width : 700,
            chartConfig : {
                chart: {
                },
                title: {
                    text: 'Stock price from 28th Aug 2012 to 20th Sept 2012 - Apple (AAPL)'
                },
                subtitle: {
                    text: 'Open & Close range'
                },
                legend: { enabled: false },
                credits: {
                    text: 'Learning Highcharts'
                },
                xAxis: {
                    title: {
                        text: 'Date',
                        align: 'high'
                    },
                    labels: {
                        rotation: -45,
                        align : 'center',
                        y: 40,
                        x: -20
                    }
                },
                yAxis: {
                    title: {
                        text: 'Price ($)'
                    }
                }
            }
        },

        polar: {
            series : [{
                type: 'column',
                name: 'Lab Dept.',
                dataIndex: 'lab'
            }, {
                type: 'column',
                name: 'Sales Dept.',
                dataIndex: 'sales'
            }, {
                type: 'column',
                name: 'Support Dept.',
                dataIndex: 'support'
            }, {
                type: 'column',
                name: 'Logistic Dept.',
                dataIndex: 'logistic'
            }],
            xField: 'time',
            height : 500,
            width : 700,
            chartConfig : {
                chart: {
                    polar: true
                },
                title: {
                    text: 'Network usage on 1G pipe across depts during the day'
                },
                subtitle: {
                    text: 'From 8:00 am to 8:00 pm'
                },
                tooltip: {
                    shared: true,
                    formatter: function() {
                        return "At the hour starting from " + this.x + "<br/>" + 
                            this.points[0].series.name + ": " + ((this.points[0].y / 1000000000) * 100).toFixed(2) + " %<br/>" + 
                            this.points[1].series.name + ": " + ((this.points[1].y / 1000000000) * 100).toFixed(2) + " %<br/>" + 
                            this.points[2].series.name + ": " + ((this.points[2].y / 1000000000) * 100).toFixed(2) + " %<br/>" + 
                            this.points[3].series.name + ": " + ((this.points[3].y / 1000000000) * 100).toFixed(2) + " %<br/>" +
                            "Free: " + ((this.points[0].total / 1000000000) * 100).toFixed(2) + " %"; 
                    }
                },
                credits: {
                    text: 'joekuan.wordpress.com'
                },
                xAxis: {
                    tickmarkPlacement: 'between'
                },
                yAxis: {
                    title: {
                        text: 'Percentage'
                    },
                    labels: {
                        formatter: function() {
                            return (this.value / 10000000).toFixed(0) + " %";
                        }
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                }
            }
        },

        columnRange: {
            series : [{
                name: 'Open & Close',
                type : 'columnrange',
                dataIndex: [ 'open', 'close' ]
            }, {
                name: 'High & Low',
                type : 'columnrange',
                minDataIndex: 'low',
                maxDataIndex: 'high'
            }],
            xField: 'date',
            height : 500,
            width : 700,
            chartConfig : {
                chart: {
                },
                title: {
                    text: 'Stock price from 28th Aug 2012 to 20th Sept 2012 - Apple (AAPL)'
                },
                subtitle: {
                    text: 'Open & Close and High & Low ranges'
                },
                credits: {
                    text: 'Learning Highcharts'
                },
                xAxis: {
                    title: {
                        text: 'Date',
                        align: 'high'
                    },
                    labels: {
                        rotation: -45,
                        align : 'center',
                        y: 40,
                        x: -20
                    }
                },
                yAxis: {
                    title: {
                        text: 'Price ($)'
                    }
                }
            }
        },

        star: {
            series : [{
                type: 'line',
                name: '2011 June',
                dataIndex: '2011_June'
            }, {
                type: 'line',
                name: '2012 June',
                dataIndex: '2012_June'
            }],
            xField: 'browser',
            height : 500,
            width : 700,
            chartConfig : {
                chart: {
                    polar: true
                },
                title: {
                    text: 'Browsers usage compare on w3school'
                },
                subtitle: {
                    text: 'Compare June 2011 to June 2012'
                },
                credits: {
                    text: 'source: w3school'
                },
                xAxis: {
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0 
                }
            }
        },

        gauge: {
            series : [{
                type : 'gauge',
                color: dialColor,
                dataIndex : 'speed',
                yAxis: 0,
                dataLabels: {
                    color: '#E58964',
                    borderWidth: 0,
                    y: -15,
                    style: {
                        fontSize: '40px',
                        fontFamily: 'digital',
                        fontStyle: 'italic'
                    },
                    formatter: function() {
                        return this.y.toFixed(1);
                    }
                },
                dial: {
                    backgroundColor: dialColor,
                    baseLength: '90%',
                    baseWidth: 7,
                    radius: '100%',
                    topWidth: 3,
                    rearLength: '-74%',
                    borderColor: '#B17964',
                    borderWidth: 1
                },
                zIndex: 1,
                pivot: {
                    radius: '0'
                }
            }, {
                type : 'gauge',
                color: dialColor,
                dataIndex : 'rpm',
                yAxis: 2,
                dataLabels: {
                    color: '#E58964',
                    borderWidth: 0,
                    y: -40,
                    x: 5,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'digital',
                        fontStyle: 'italic'
                    },
                    formatter: function() {
                        return (this.y * 1000).toFixed(0) + " rpm"
                    }
                },
                dial: {
                    backgroundColor: dialColor,
                    baseLength: '90%',
                    baseWidth: 7,
                    radius: '100%',
                    topWidth: 3,
                    rearLength: '-74%',
                    borderColor: '#631210',
                    borderWidth: 1
                },
                pivot: {
                    radius: '0'
                }
            }],
            height : 500,
            listeners: {
                afterChartRendered: function(chart) {
                    var hcExt = this;
                    Demo.gaugeRunnerTask && Demo.gaugeRunnerTask.destroy();
                    Demo.gaugeRunnerTask = new Ext.util.TaskRunner();
                    Demo.gaugeRunnerTask.start({
                        run: function() {
                            hcExt.store.load({
                                scope: this,  // runnerTask
                                callback: function(records) {
                                    if (records[0].data.rpm == null && records[0].data.speed == null) {
                                        this.stop();
                                    }
                                },
                                params: { counter: this.taskRunCount }
                            });
                        },
                        interval: 500,
                        repeat: 0
                    });
                }
            },
            width : 700,
            chartConfig : {
                chart: {
                    alignTicks: false,
                    events: {
                        redraw: function() {
                            this.ledBox && this.ledBox.destroy();

                            // 2nd pane center
                            var pane = this.panes[1].center; 
                            this.ledBox = this.renderer.rect(pane[0]-50, pane[1], 120, 80, 3).attr({
                                fill: 'rgba(229,137,100, 0.1)',
                                zIndex: 0 
                            }).add();
                        }
                    }
                },
                title: {
                    text: 'Fiat 500 Speedometer'
                },
                pane: [{
                    startAngle: -120,
                    endAngle: 120,
                    size: 300,
                    background: [{
                        // BG color for rpm
                        backgroundColor: '#1A1815',
                        outerRadius: '68%',
                        innerRadius: '48%'
                    }, {
                        // BG color in between speed and rpm
                        backgroundColor: '#38392F',
                        outerRadius: '72%',
                        innerRadius: '67%'
                    }, {
                        // BG color for speed
                        //  backgroundColor: '#E4E3DF',
                        backgroundColor: { 
                            radialGradient: {
		    			                  cx: 0.5,
		    			                  cy: 0.6,
		    			                  r: 1.0 
		    		                },
	                          stops: [
	                              [0.3, '#A7A9A4'],
	                              //[0.6, '#FF04FF'],
	                              [0.45, '#DDD'],
	                              [0.7, '#EBEDEA']
	                              //[0.7, '#FFFF04'],
	                          ]
                        },
                        innerRadius: '72%',
                        outerRadius: '105%'
                    }, {
                        // Below rpm bg color
                        // backgroundColor: '#909090',
                        zIndex: 1,
                        backgroundColor: { 
                            radialGradient: {
		    			                  cx: 0.5,
		    			                  cy: 0.55,
		    			                  r: 0.5 
		    		                },
	                          stops: [
                                [0.6, '#48443B' ],
	                              [0.8, '#909090'],
	                              [1, '#FFFFF6']
	                          ]
                        },
                        outerRadius: '48%',
                        innerRadius: '40%'
                    }, {
                        backgroundColor: '#35382E',
                        zIndex: 1,
                        outerRadius: '40%',
                        innerRadius: '39%'
                    }, {
                        backgroundColor: '#16160E',
                        outerRadius: '39%'

                    }]
                }, {
                    startAngle: -120,
                    endAngle: 120,
                    size: 200
                }],
                yAxis: [{
                    title: {
                        text: 'mph km/h',
                        y: 178,
                        x: -86,
                        style: {
                            color: speedColor,
                            fontFamily: 'Squada One',
                            fontStyle: 'italic'
                        }
                    },
                    min: 0,
                    max: 140,
                    tickInterval: 10,
                    tickLength: 6,
                    lineWidth: 2,
                    lineColor: speedColor,
                    tickColor: speedColor,
                    minorTickInterval: 5,
                    minorTickLength: 3,
                    minorTickWidth: 2,
                    minorTickColor: speedColor,
                    endOnTick: false,
                    labels: {
                        rotation: 'auto',
                        step: 2,
                        style: {
                            fontFamily: 'Squada One',
                            fontSize: 28,
                            color: speedColor
                        }
                    },
                    pane: 0
                }, {
                    min: 0,
                    max: 220,
                    tickLength: 2,
                    minorTickLength: 2,
                    minorTickInterval: 10,
                    tickInterval: 10,
                    tickPosition: 'outside',
                    lineColor: speedColor,
                    tickColor: speedColor,
                    minorTickPosition: 'outside',
                    minorTickColor: speedColor,
                    labels: {
                        distance: 5,
                        rotation: 'auto',
                        style: {
                            color: speedColor ,
                            zIndex: 0
                        },
                        formatter: function() {
                            var val = null;
                            var label = this.value;
                            $.each(kmhArr, function(idx, kmh) {
                                if (label == kmh) {
                                    val = label;
                                    return false;
                                } 
                            }); 
                            return val;
                        }
                    },
                    endOnTick: false,
                    offset: -40,
                    pane: 0
                }, {
                    title: {
                        text: 'rpm x1000',
                        y: 128,
                        x: -38,
                        style: {
                            color: rpmColor,
                            fontFamily: 'Squada One',
                            fontSize: '9px',
                            fontStyle: 'italic'
                        }
                    },
                    min: 0,
                    max: 8,
                    //offset: -50,
                    minorTickInterval: 0.5,
                    tickInterval: 1,
                    tickLength: 3,
                    minorTickLength: 6,
                    lineColor: rpmColor,
                    tickWidth: 2,
                    minorTickWidth: 2,
                    lineWidth: 2,
                    labels: {
                        rotation: 'auto',
                        style: {
                            fontFamily: 'Squada One',
                            fontSize: 22,
                            color: rpmColor 
                        },
                        formatter: function() {
                            if (this.value >=6) {
                                return '<span style="color:' + hiRef +'">' + this.value + "</span>";
                            }
                            return this.value;
                        }
                    },
                    pane: 1,
                    plotBands: [{
                        from: 6,
	        	            to: 8,
	        	            color: hiRef,
                        innerRadius: '94%'
                    }]
                }],
                tooltip: { enabled: false },
                credits: {
                    enabled: false 
                }
            }
        },

        /********************************************************************
         * Bubble single series - use xField, yField and radius
         ********************************************************************/
        bubbleSingle : {
            series : [{
                type : 'bubble',
                xField: 'x',
                yField: 'y',
                radiusField: 'r',
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, 'rgba(69,114,167,0.5)']
                        ]
                    }
                }
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Single bubble series - use xField, yField and radiusField",
                    x : -20 //center
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /********************************************************************
         * Bubble multiple series - same as Irregular data series
         ********************************************************************/
        bubbleMulti : {
            series : [{
                type : 'bubble',
                dataIndex : 'series1'
            }, {
                type : 'bubble',
                dataIndex : 'series2'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Multiple bubble series - irregular data",
                    x : -20 //center
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /********************************************************************
         * Error bar series 
         ********************************************************************/
        errorBar : {
            series : [{
                type: 'errorbar',
                dataIndex: [ 'open', 'close' ],
                color: Highcharts.getOptions().colors[0],
                lineWidth: 3
            }, {
                type: 'errorbar',
                maxDataIndex: 'high',
                minDataIndex: 'low',
                color: Highcharts.getOptions().colors[2]
            }],
            xField: 'date',
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text: "Error bar - uses stock data for plotting two error bar series. (Open - Close) and (Low - High)",
                    x: -20 //center
                },
                subtitle: {
                    text: 'First series - Open & Close (Non sorted series), 2nd Series- High & low (sorted series)',
                    x: 0
                },
                xAxis: {
                    title: {
                        text: 'Date',
                        align: 'high'
                    },
                    labels: {
                        rotation: -45,
                        align : 'center',
                        y: 40,
                        x: -20
                    }
                },
                yAxis: {
                    title: {
                        text: 'Price ($)'
                    }
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /********************************************************************
         * Box plot
         ********************************************************************/
        boxPlot : {
            series : [{
                type: 'boxplot',
                xField: 'experiment',
                minDataIndex: 'min',
                lowQtrDataIndex: 'q1',
                medianDataIndex: 'med',
                highQtrDataIndex: 'q2',
                maxDataIndex: 'max'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text: "Box Plot series",
                    x: -20 //center
                },
                xAxis: {
                    allowDecimals: false,
                    title: {
                        text: 'Experiment No.',
                        align: 'high'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Observations'
                    }
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /********************************************************************
         * Water fall demo
         ********************************************************************/
        waterfall : {
            series : [{
                upColor: Highcharts.getOptions().colors[2],
                color: Highcharts.getOptions().colors[3],
                type: 'waterfall',
                categorieField: 'category',
                yField: 'value',
                colorField: 'color',
                sumTypeField: 'sum',
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        color: '#FFFFFF',
                        fontWeight: 'bold'
                    }
                },
                pointPadding: 0
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text: "Waterfall demo",
                    x: -20 //center
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'USD'
                    }
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

	pyramid: {
            series : [{
                type: 'pyramid',
                categorieField: 'category',
                yField: 'value'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 100
                },
                title : {
                    text: "Sales Pyramid demo",
                    x: -50 //center
                },
		plotOptions: {
		    series: {
			dataLabels: {
			    enabled: true,
			    format: '<b>{point.name}</b> ({point.y:,.0f})',
			    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
			    softConnector: true
			}
		    }
		},
                legend: {
                    enabled: false
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
	},

        /********************************************************************
         * Funnel demo
         ********************************************************************/
        funnel : {
            series : [{
                type: 'funnel',
                categorieField: 'category',
                yField: 'value',
                name: 'Unique users',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text: "Funnel demo",
                    x: -20 //center
                },
                legend: {
                    enabled: false
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        /****************************************************************
         *************** MISC TESTS FOR THE EXTENSION *******************
         ****************************************************************/
        test1 : {
            series : [{
                type : 'spline',
                dataIndex : 'series1'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Click 'Reload Data' several times to test add/remove data points in series update",
                    x : -20 //center
                },
                subtitle : {
                    text : "Additional test: hide the series and click 'Reload Data' several times'",
                    x : -20 //center
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        }, 
        test2: {
            series : [{
                type : 'pie',
                categorieField : 'time',
                dataField : 'temperature',
                name : 'Temperature'
            }],
            resizable: false,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    // Fix the size of the chart
                    height : 500,
                    width : 700
                },
                title : {
                    text : "Resizing the browser window shouldn't redraw & resize the chart",
                    x : -20 //center
                },
                subtitle : {
                    text : 'Chart size is fixed to 700 x 500',
                    x : -20
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },
        test3: {
            series : [{
                type : 'pie',
                categorieField : 'time',
                dataField : 'temperature',
                name : 'Temperature',
                listeners: {
                    pointclick: function(serie,point,record,event) {
                        var msg = "Series name: " + serie.name + 
                            ", selected temperature value: " + point.y + "<BR>" +
                            "data record index: " + record.index + ", event click (clientX & clientY): " +
                            event.clientX + ", " + event.clientY;
                        Ext.Msg.alert("Point Click Info", msg);
                    }
                }
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Fire pointclick event when clicking a data point and show the selected record data",
                    x : -20 //center
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        // Test updateNoRecord
        test4 : {
            series : [{
                type : 'column',
                dataIndex : 'yesterday',
                name : 'Yesterday',
                updateNoRecord: true
            }, {
                type : 'column',
                dataIndex : 'today',
                name : 'Today'
            }],
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Yesterday series is set with updateNoRecord option.<BR>Click 'Reload Data' and Yesterday series is returned in alternate reload.",
                    useHTML: true
                },
                subtitle : {
                    text : 'Expected Result: Today series remains and Yesterday appears in alternate reload',
                    y: 50
                },
                xAxis : [{
                    title : {
                        text : 'Time',
                        margin : 20
                    },
                    labels : {
                        rotation : 270,
                        y : 35,
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    }
                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },

        // Test load mask
        test5 : {
            series : [{
                type : 'scatter',
                lineWidth : 1,
                xField: 'rebars_x',
                yField: 'rebars_y'
            }, {
                type : 'scatter',
                lineWidth : 0,
                xField: 'points_x',
                yField: 'points_y'
            }],
            loadMask: true,
            loadMaskMsg: 'Test LoadMask screen .... ',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x'
                },
                title : {
                    text : "Click 'Reload Data' to see the loadMask popup while store is loading.",
                    x : -20 //center
                },
                subtitle : {
                    text : 'Server side is configured with 5 secs sleep before returning the data',
                    x : -20
                },
                xAxis : [{
                    labels : {
                        rotation : 270,
                        y : 35
                    }
                }],
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        },
        // Test different size of pie series in each update
        test6 : {
            series : [{
                type : 'pie',
                categorieField: 'name',
                dataField: 'iq',
                name: 'IQ'
            }],
            height : 500,
            width : 700,
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120
                },
                title : {
                    text : "Click 'Reload Data' to test add/remove data points for pie series update"
                },
                subtitle: {
                    text: 'The pie series rotate from 1 to 5 data points'
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        }

    } // config

});
