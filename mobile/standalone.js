Ext.Loader.setConfig({
    enabled : true,
    disableCaching : true, // For debug only
    paths : {
        'Chart' : '../Chart'
    }
});

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.ColumnSerie');

// ALWAYS POST!!
Ext.override(Ext.data.proxy.Ajax,{ 
    getMethod: function(request) { 
        return 'POST'; 
    } 
});

Ext.ns('Demo');

Ext.application({
    name: 'Highcharts',
    requires:[
    ],
    models: [ 'EmbeddedData' ],
    stores: [ 'EmbeddedData' ],
    launch : function() {

        var nList = Ext.create('Ext.NestedList', {
            fullscreen: true
        });

        var container = nList.getDetailContainer();

        container.add({
                xtype: 'highchart',
                series : [{
                    dataIndex : 'x'
                }, {
                    dataIndex : 'y'
                }, {
                    dataIndex : 'z'
                }],
                store: Ext.create('Highcharts.store.EmbeddedData', {
                    model: 'Highcharts.model.EmbeddedData',
                    storeId: 'chartStore'
                }),
                xField : 'category',
                chartConfig : {
                    chart : {
                        type: 'column',
                        zoomType : 'x'
                    },
                    title : {
                        text : 'Column chart for store with emdedded data',
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
        });

    }

});
