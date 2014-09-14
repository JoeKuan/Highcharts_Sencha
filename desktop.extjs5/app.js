Ext.Loader.setConfig({
    enabled : true,
    disableCaching : true, // For debug only
    paths : {
        // 'Chart' : HOME + '/highcharts_extjs4'     // For website
        'Chart' : '../Chart'
    }
});

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.AreaRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineSerie');
Ext.require('Chart.ux.Highcharts.BarSerie');
Ext.require('Chart.ux.Highcharts.BoxPlotSerie');
Ext.require('Chart.ux.Highcharts.BubbleSerie');
Ext.require('Chart.ux.Highcharts.ColumnRangeSerie');
Ext.require('Chart.ux.Highcharts.ColumnSerie');
Ext.require('Chart.ux.Highcharts.ErrorBarSerie');
Ext.require('Chart.ux.Highcharts.FunnelSerie');
Ext.require('Chart.ux.Highcharts.GaugeSerie');
Ext.require('Chart.ux.Highcharts.SolidGaugeSerie');
Ext.require('Chart.ux.Highcharts.LineSerie');
Ext.require('Chart.ux.Highcharts.PieSerie');
Ext.require('Chart.ux.Highcharts.RangeSerie');
Ext.require('Chart.ux.Highcharts.ScatterSerie');
Ext.require('Chart.ux.Highcharts.SplineSerie');
Ext.require('Chart.ux.Highcharts.WaterfallSerie');
Ext.require('Chart.ux.Highcharts.PyramidSerie');

// ALWAYS POST!!
Ext.override(Ext.data.proxy.Ajax,{ 
    getMethod: function(request) { 
        return 'POST'; 
    } 
});

Ext.ns("Demo");

Ext.application({
    name : 'Highcharts',
    // appFolder : HOME + '/demos/Highcharts_ExtJs_4/app',   // For website
    appFolder : 'app',
    controllers : ['Charts'],
    requires: [
        'Highcharts.ChartsDesktopConfig'
    ],
    launch : function() {

        // For joekuan.org website
        if (Ext.get('loading-mask')) 
            Ext.get('loading-mask').fadeOut({remove:true});

    var title = 'ExtJs version: ' + Ext.versions.core.version + ", " +
                      'Highcharts version: ' + Highcharts.version + ", " +
                      'Chart.ux.Highchart: ' + Chart.ux.Highcharts.version;

        Ext.create('Ext.container.Viewport', {
            layout : 'border',
            border : '5 5 5 5',
      title: title,
      listeners: {
        close: function(window) {
	    $("#layerslider", parent.document.body).slideDown(400, function() {
		$('#demo', parent.document.body).html('');
	    });
	}
      },
            items : [{
                region: 'north',
                title: title,
                border: true
            }, {
                region : 'west',
                width : 200,
                title : 'Charts',
                id: 'leftTree',
                xtype : 'chartsTree',
                margins : '0 0 5 5',
                split: true
            }, {
                region : 'center',
                id : 'centerpane',
                xtype : 'panel',
                layout : 'fit',
                margins : '0 5 5 0',
                tbar : [{
                    text : 'Reload Data',
                    id : 'reload',
                    disabled : true,
                    action: 'reload'
                }, {
                    text: 'Add Series',
                    id: 'addSeries',
                    disabled: true,
                    action: 'addSeries'
                }]
            }]
        }).show();

    }
});
