   var speedColor = '#474337';
    var rpmColor = '#BBB59C';
    var kmhArr = [ 0, 20, 40, 60, 90, 120, 150, 180, 210 ];
    var hiRef = '#A41E09';
    var dialColor = '#FA3421';
    var currentRpm = 0;

Ext.define ("Chart.ux.ChartsMobileConfig", {

  config : {
    spline : {
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
      chartConfig : {
        chart : {
          marginRight : 130,
          marginBottom : 120,
          zoomType : 'x'
        },
        title : {
          text : 'Simple spline chart with animation',
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
        type : 'spline',
        dataIndex : 'yesterday',
        name : 'Yesterday'
      }, {
        type : 'spline',
        dataIndex : 'today',
        name : 'Today'
      }],
      animation: false,
      xField : 'time',
      chartConfig : {
        chart : {
          marginRight : 130,
          marginBottom : 120,
          zoomType : 'x'
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

    /*********************************************
     *    Spline - ExtJs Popup menu
     *********************************************/
    splinePopup : {
      series : [{
        type : 'spline',
        dataIndex : 'yesterday',
        name : 'Yesterday',
        events: {
           click: function(evt) {
               var me = this;
               var msg = new Ext.MessageBox({
                   title: 'Graph Settings',
                   items:[{
                       xtype: 'togglefield',
                       label: 'Average Plot Line',
                       labelAlign: 'top',
                       id: 'avgLine',
                       value: (Demo.splinePopup) ? Demo.splinePopup.avgLine : 0
                   }],
                   buttons: [{
                       text: 'Update',
                       ui: 'confirm',
                       // Can't use scope, Touch doesn't like it
                       handler: function(chart) {
                           return function() {
                               if (Ext.getCmp('avgLine').getValue()) {
                                   // Enable
                                   var average = 0;
                                   Ext.each(chart.points, function(point) {
                                       average += point.y;
                                   });
                                   average = average / chart.points.length;

                                   chart.yAxis.removePlotLine('average');
                                   chart.yAxis.addPlotLine({
                                       id: 'average',
                                       value: average,
                                       width: 2,
                                       dashStyle: 'dashdot',
                                       color: '#80CC99',
                                       label: {
                                           text: 'Average: ' + average
                                       }
                                   });
                                   
                                   Demo.splinePopup = { avgLine: 1 };

                               } else {
                                   chart.yAxis.removePlotLine('average');
                                   Demo.splinePopup = { avgLine: 0 };
                               }
                               msg.destroy();                               
                           }
                       }(me)
                   }, {
                       text: 'Cancel',
                       ui: 'decline',
                       handler: function() { msg.destroy(); }
                   }]
               });
               msg.show();
           }
        },
        xField : 'time'
      }, {
        type : 'spline',
        dataIndex : 'today',
        name : 'Today',
        xField : 'time',
        point: {
            events: {
                click: function(evt) {                 
                    var me = this;
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
            }
        }
      }],
      chartConfig : {
        chart : {
          marginRight : 130,
          marginBottom : 120,
          zoomType : 'x'
        },
        title : {
          text : 'Tap Yesterday series for series menu and tap on Today series for point menu',
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
          text : "Click on the '+' button at the top to add a new series without store data",
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
      xField : 'time',
      chartConfig : {
        chart : {
          zoomType : 'x'
        },
        title : {
          text : 'Bar chart for landscape orientation and Column chart for Portrait orientation',
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

    pie : {
      series : [{
        type : 'pie',
        categorieField : 'time',
        dataField : 'temperature',
        name : 'Temperature'
      }],
      chartConfig : {
        chart : {
          marginRight : 130,
          marginBottom : 120
        },
        title : {
          text : 'Pie - single series',
          x : -20 //center
        },
        subtitle : {
          text : 'Random Value',
          x : -20
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
          text : 'Scatter - Two series',
          x : -20 //center
        },
        xAxis : [{
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
        name: 'Versions',
        innerSize: '60%',
        dataLabels: {
          formatter: function() {
            return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
          }
        }
      }],
      chartConfig : {
        chart : {
          marginRight : 130,
          marginBottom : 120
        },
        title : {
          text : 'Donut chart - Two series',
          x : -20 //center
        },
        subtitle : {
          text : 'Browser market share, April, 2011',
          x : -20
        },
        tooltip : {
          formatter : function () {
				    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
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

    areaRangeSorted: {
      series : [{
        type : 'areasplinerange',
        minDataIndex: 'low',
        maxDataIndex: 'high'
      }],
      xField: 'date',
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
      listeners: {
          afterChartRendered: function(chart) {
              var hcExt = this;
              this.runnerTask && this.runnerTask.destroy();
              this.runner = new Ext.util.TaskRunner();
              this.runnerTask = this.runner.start({
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
    }

  },

  constructor : function (cfg) {
    this.initConfig (cfg);
  }

});
