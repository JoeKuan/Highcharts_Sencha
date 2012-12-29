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
Ext.require('Chart.ux.Highcharts.ColumnRangeSerie');
Ext.require('Chart.ux.Highcharts.ColumnSerie');
Ext.require('Chart.ux.Highcharts.GaugeSerie');
Ext.require('Chart.ux.Highcharts.LineSerie');
Ext.require('Chart.ux.Highcharts.PieSerie');
Ext.require('Chart.ux.Highcharts.RangeSerie');
Ext.require('Chart.ux.Highcharts.ScatterSerie');
Ext.require('Chart.ux.Highcharts.SplineSerie');
Ext.require('Chart.ux.ChartsDesktopConfig');

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

  launch : function() {

    // For joekuan.org website
    if (Ext.get('loading-mask')) 
        Ext.get('loading-mask').fadeOut({remove:true});

    Ext.create('Ext.container.Viewport', {
      layout : 'border',
      border : '5 5 5 5',
      items : [{
        region : 'north',
        listeners: {
           'render': function(panel) {
               panel.body.on('click', function() {
                   Ext.Msg.alert('Info', 
                      'ExtJs version: ' + Ext.versions.core.version + ", <br/>" + 
                      'Highcharts version: ' + Highcharts.version + ", <br/>" + 
                      'Chart.ux.Highchart: ' + Chart.ux.Highcharts.version);
               });
            }
        },
        html : '<h1 class="x-panel-header">Highcharts examples</h1>',
        height: 40,
        id: 'banner',
        border : false,
        margins : '0 0 5 0',
        bodyStyle: { 'background-image': 'url(../images/banner.gif)',
                     'background-repeat': 'repeat-x',
                      color: '#7a7a7a'
                   }
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
    });

  }
});
