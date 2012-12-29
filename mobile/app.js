Ext.Loader.setConfig({
    enabled : true,
    disableCaching : true, // For debug only
    paths : {
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
Ext.require('Chart.ux.ChartsMobileConfig');

// ALWAYS POST!!
Ext.override(Ext.data.proxy.Ajax,{ 
    getMethod: function(request) { 
        return 'POST'; 
    } 
});

Ext.ns('Demo');

Ext.application({
    name: 'Highcharts',
    appFolder: 'app',

    launch : function() {

        Ext.require('Highcharts.model.Temperature');
        Ext.require('Highcharts.store.Temperature');
        Ext.require('Highcharts.model.NullTemperature');
        Ext.require('Highcharts.store.NullTemperature');
        Ext.require('Highcharts.model.NumericTemperature');
        Ext.require('Highcharts.store.NumericTemperature');
        Ext.require('Highcharts.model.Scatter');
        Ext.require('Highcharts.store.Scatter');
        Ext.require('Highcharts.model.TempSummary');
        Ext.require('Highcharts.store.TempSummary');
        Ext.require('Highcharts.model.Browsers');
        Ext.require('Highcharts.store.Browsers');
        Ext.require('Highcharts.model.BrowsersJune');
        Ext.require('Highcharts.store.BrowsersJune');
        Ext.require('Highcharts.model.NetworkUsage');
        Ext.require('Highcharts.store.NetworkUsage');
        Ext.require('Highcharts.model.Stock');
        Ext.require('Highcharts.store.Stock');
        Ext.require('Highcharts.model.Speedometer');
        Ext.require('Highcharts.store.Speedometer');

        Demo.configs = Ext.create('Chart.ux.ChartsMobileConfig');

        Ext.define('ChartDemo', {
            extend: 'Ext.data.Model',
            config: {
                fields: [ 'text', 'shortDesc', 'icon', 'children' ]
            } 
        });

        var chartsDemo = Ext.create('Ext.data.TreeStore', {
            model: 'ChartDemo',
            storeId: 'chartDemoStore',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: './data/get-charts.php',
                reader: {
                    type: 'json',
                    rootProperty: 'children'
                }
            }
        });

        Ext.create('Ext.NestedList', {
            fullscreen: true,
            backButton: {ui: "back", hidden: false},
            store: chartsDemo,
            getItemTextTpl: function(node) {
                return '{text} ' +
                    '<tpl if="shortDesc.length"> - {shortDesc}</tpl>' +
                    '<tpl if="children.length"> ( {children.length} Demos )</tpl>';
            },
            title: 'Highcharts Examples',
            toolbar: {
                docked: 'top',
                xtype: 'titlebar',
                items: [{
                    align: 'right',
                    text: 'Demos List',
                    handler: function() {
                        document.location.href = 'http://joekuan.org/demos/Highcharts_Sencha/mobile/';
                    }
                }, {
                    align: 'right',
                    text: 'Version Info',
                    handler: function() {
                        Ext.Msg.alert('Info', 'Highcharts (' + Highcharts.version + ') Example For Sencha Touch (' + Ext.version.version + ')');
                    }
                }, {
                    align: 'left',
                    iconCls: 'home',
                    iconMask: true,
                    id: 'home',
                    handler: function() {
                        document.location.href = 'http://joekuan.org';
                    }
                }, {
                    // Add series button
                    align: 'left',
                    iconCls: 'add',
                    iconMask: true,
                    hidden: true,
                    id: 'addSeries',
                    handler: function() {
                        var data = [];
                        var chart = Demo.chartComponent.chart;
                        for (var i = 0; i < 20; i++) {
                            data.push((Math.random() * 15) + 15);
                        }
                        Demo.chartComponent.addSeries([{
                            name: chart.series.length + ' days ago',
                            data: data,
                            type: 'spline'
                        }], true);
                    }
                }, {
                    // Reload store button
                    align: 'left',
                    iconCls: 'refresh',
                    iconMask: true,
                    hidden: true,
                    id: 'reload',
                    handler: function() {
                        var store = Ext.getStore('chartStore');
                        store && store.load();
                    }
                }]
            },
            listeners: {
                back: function(nestedList, node, list) {

                    Ext.getCmp('home').hide();
                    Ext.getCmp('reload').hide();
                    Ext.getCmp('addSeries').hide();

                    var detailContainer = nestedList.getDetailContainer();
                    var itemsLen = detailContainer.getItems().length;
                    // See whether the last item is charted. If so, we remove it
                    // otherwise the back button won't work
                    if (itemsLen) {
                        var item = detailContainer.getAt(itemsLen - 1);
                        if (item.getXTypes() == 'component/highchart') {
                            detailContainer.removeAt(itemsLen - 1);
                            item.destroy();
                        }
                    }
                },
                itemtap: function(nestedList, list, index, target, record) {

                    var detailContainer = nestedList.getDetailContainer();
                    var hcConfig = null, chart = null, store = null,
                    storeType = '', reload = false, addSeries = false;
                    //detailContainer.removeAll();

                    switch (record.data.id) {
                        // Rotate the chart to switch between column and bar
                    case 'column':
                        hcConfig = Demo.configs.getColumn();
                        reload = true;
                        storeType = 'temperature';
                        break;
                    case 'spline':
                        hcConfig = Demo.configs.getSpline();
                        reload = true;
                        storeType = 'temperature';
                        break;
                    case 'splineNoAnim':
                        hcConfig = Demo.configs.getSplineNoAnim();
                        reload = true;
                        storeType = 'temperature';
                        break;
                    case 'splineAddSeries':
                        hcConfig = Demo.configs.getSplineAddSeries();
                        reload = true;
                        addSeries = true;
                        storeType = 'temperature';
                        break;
                    case 'splineNullData':
                        hcConfig = Demo.configs.getSplineNullData();
                        reload = true;
                        storeType = 'nullTemperature';
                        break;
                    case 'splineCatShift':
                        hcConfig = Demo.configs.getSplineCatShift();
                        reload = true;
                        storeType = 'temperature';
                        break;
                    case 'splineNumShift':
                        hcConfig = Demo.configs.getSplineNumShift();
                        reload = true;
                        storeType = 'numericTemperature';
                        break;
                    case 'splinePopup':
                        hcConfig = Demo.configs.getSplinePopup();
                        reload = true;
                        storeType = 'numericTemperature';
                        break;
                    case 'scatter':
                        hcConfig = Demo.configs.getScatter();
                        reload = true;
                        storeType = 'scatter';
                        break;
                    case 'pie':
                        hcConfig = Demo.configs.getPie();
                        reload = true;
                        storeType = 'tempSummary';
                        break;
                    case 'donut':
                        hcConfig = Demo.configs.getDonut();
                        reload = false;
                        storeType = 'browsers';
                        break;
                    case 'star':
                        hcConfig = Demo.configs.getStar();
                        reload = false;
                        storeType = 'browsersJune';
                        break;
                    case 'polar':
                        hcConfig = Demo.configs.getPolar();
                        storeType = 'networkusage';
                        break;
                    case 'arearange_unsorted':
                        hcConfig = Demo.configs.getAreaRangeUnsorted();
                        storeType = 'stock';
                        break;
                    case 'arearange_sorted':
                        hcConfig = Demo.configs.getAreaRangeSorted();
                        storeType = 'stock';
                        break;
                    case 'columnrange':
                        hcConfig = Demo.configs.getColumnRange();
                        storeType = 'stock';
                        break;
                    case 'gauge':
                        hcConfig = Demo.configs.getGauge();
                        storeType = 'speedometer';
                        break;
                    default: 
                        return;
                    }

                    // Important, we need to clone from because the extension
                    // will add series array into hcConfig. If back and forth
                    // buttons are pressed, hcConfig.series will accumulate
                    // the data if it is not cloned from the original state
                    hcConfig = Ext.clone(hcConfig);

                    Ext.getCmp('home').show();

                    switch (storeType) {
                    case 'temperature':
                        store = Ext.create('Highcharts.store.Temperature', {
                            model: 'Highcharts.model.Temperature',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'nullTemperature':
                        store = Ext.create('Highcharts.store.NullTemperature', {
                            model: 'Highcharts.model.NullTemperature',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'scatter':
                        store = Ext.create('Highcharts.store.Scatter', {
                            model: 'Highcharts.model.Scatter',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'numericTemperature':
                        store = Ext.create('Highcharts.store.NumericTemperature', {
                            model: 'Highcharts.model.NumericTemperature',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'tempSummary':
                        store = Ext.create('Highcharts.store.TempSummary', {
                            model: 'Highcharts.model.TempSummary',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'browsersJune':
                        store = Ext.create('Highcharts.store.BrowsersJune', {
                            model: 'Highcharts.model.BrowsersJune',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'browsers':
                        store = Ext.create('Highcharts.store.Browsers', {
                            model: 'Highcharts.model.Browsers',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'stock':
                        store = Ext.create('Highcharts.store.Stock', {
                            model: 'Highcharts.model.Stock',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'networkusage':
                        store = Ext.create('Highcharts.store.NetworkUsage', {
                            model: 'Highcharts.model.NetworkUsage',
                            storeId: 'chartStore'
                        });
                        break;
                    case 'speedometer':
                        store = Ext.create('Highcharts.store.Speedometer', {
                            model: 'Highcharts.model.Speedometer',
                            storeId: 'chartStore'
                        });
                        break;
                    }

                    Demo.chartComponent && (Demo.chartComponent = Demo.chartComponent.destroy());
                    Demo.chartComponent = chart = Ext.widget('highchart', hcConfig);
                    chart.bindStore(store, true);

                    store.load();

                    detailContainer.add([chart]).show();

                    reload && Ext.getCmp('reload').show();
                    if (addSeries) 
                        Ext.getCmp('addSeries').show();
                    else
                        Ext.getCmp('addSeries').hide();
                }
            }
        });

    }

});
