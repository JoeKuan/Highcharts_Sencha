Ext.Loader.setConfig({
  enabled : true,
  paths : {
    'Chart' : '../Chart/'
  }
});

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.BubbleSerie');

Ext.application({
  name : 'HighChart',
  launch : function() {

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
      items : [{
          xtype : 'highchart',
          id : 'chart',
          series: [{
	      type : 'bubble',
	      data: [ [ 5, 19200000, 13 ] ]
	  }],
	  store: null,
	  initAnimAfterLoad: false, // Without store
          chartConfig : {
              chart : {
		  marginRight : 130,
		  marginBottom : 120
              },
              yAxis : {
		  type: 'datetime',
		  dateTimeLabelFormats: { //force all formats to be hour:minute:second
		      second: '%H:%M',
		      minute: '%H:%M',
		      hour: '%H:%M',
		      day: '%H:%M',
		      week: '%H:%M',
		      month: '%H:%M',
		      year: '%H:%M'
		  },
		  min:0,
		  max:23*60*60*1000
	      }
	  }
      }]
    });

    win.show();
  }

});
