Ext.Loader.setConfig({
  enabled : true,
  disableCaching : true, // For debug only
  paths : {
    'Chart' : '../Chart/'
  }
});

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.SplineSerie');

Ext.application({
  name : 'HighChart',
  launch : function() {
    // Using the new ExtJS 4 store
    Ext.define('HighChartData', {
      extend : 'Ext.data.Model',
      fields : [{
        name : 'time',
        type : 'string'
      }, {
        name : 'yesterday',
        type : 'float'
      }, {
        name : 'today',
        type : 'float'
      }]
    });

    var store = Ext.create('Ext.data.Store', {
      model : 'HighChartData',
      proxy : {
        type : 'ajax',
        url : './data/standalone.json',
        reader : {
          type : 'json',
          root : 'rows'
        }
      },
      autoLoad : true
    });

    var randomFromTo = function(from, to) {
      return Math.floor(Math.random() * (to - from + 1) + from);
    };

    var seriesNum = 2;

    var genSeries = function() {
      var temps = [];
      for(var i = 0; i < 20; i++) {
        temps[i] = randomFromTo(15, 30);
      }

      var series = {
        type : 'spline',
        name : seriesNum + ' days ago',
        data : temps
      };
      
      seriesNum++;
      
      return series;
    };

    var win = Ext.create('Ext.window.Window', {
      width : 800,
      height : 600,
      minHeight : 400,
      minWidth : 550,
      hidden : false,
      shadow : false,
      maximizable : true,
      collapsible: true,
      title : 'Highchart example',
      renderTo : Ext.getBody(),
      layout : 'fit',
      tbar : [{
        xtype : 'button',
        text : 'Add series',
        handler : function() {
          var chart = Ext.getCmp('chart');
          chart.addSeries([ genSeries() ], true);
        }

      }],
      items : [{
        xtype : 'highchart',
        id : 'chart',
        defaultSerieType : 'spline',
        series : [{
          dataIndex : 'yesterday',
          name : 'Yesterday',
          visible : true
        }, {
          dataIndex : 'today',
          name : 'Today',
          visible : true
        }],
        store : store,
        xField : 'time',
        chartConfig : {
          chart : {
            type: 'spline',
            marginRight : 130,
            marginBottom : 120,
            zoomType : 'x',
            animation : {
              duration : 1500,
              easing : 'swing'
            }
          },
          title : {
            text : 'Standalone Highcharts for ExtJs 4 example',
            x : -20 //center
          },
          subtitle : {
            text : 'Random value',
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
              formatter : function() {
                if( typeof this.value == 'string') {
                  var dt = Ext.Date.parse(parseInt(this.value) / 1000, "U");
                  return Ext.Date.format(dt, "H:i:s");
                } else {
                  return this.value;
                }
              }

            }
          }],
          yAxis : {
            title : {
              text : 'Value'
            },
            plotLines : [{
              value : 0,
              width : 1,
              color : '#808080'
            }]
          },
          plotOptions : {
            series : {
              animation : {
                duration : 3000,
                easing : 'swing'
              }
            }
          },
          tooltip : {
            formatter : function() {
              return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
            }

          },
          credits : {
            href : 'http://joekuan.wordpress.com',
            text : 'joekuan.wordpress.com'
          },
          legend : {
            layout : 'vertical',
            align : 'right',
            verticalAlign : 'top',
            x : -10,
            y : 100,
            borderWidth : 0
          }
        }
      }]
    });
    win.show();
  }

});
