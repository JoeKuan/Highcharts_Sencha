Ext.define('Highcharts.controller.Charts', {
    extend : 'Ext.app.Controller',
    views : ['chart.Tree'],
    models : ['Chart'],
    stores : ['ChartsTree', 'Temperature', 'NumericTemperature', 
              'NullTemperature', 'Browsers', 'IrregularData', 
              'TempSummary', 'Scatter', 'Speedometer', 'Stock', 
              'NetworkUsage', 'BrowsersJune', 'UpdateNoRecord',
              'IQ', 'BubbleMulti', 'BoxPlotStore', 'WaterfallStore',
              'BubbleSingle', 'FunnelStore', 'Scatter3d'
             ],

    init : function() {

        this.control({

            // Click on the reload button
            '#reload[action=reload]' : {
                click : function() {
                    var mainChart = Ext.getCmp('main_chart');
                    if(mainChart && mainChart.store) {
                        mainChart.store.load();
                    }
                }
            },

            '#addSeries[action=addSeries]' : {
                click : function() {
                    var data = [];
                    var chart = Ext.getCmp('main_chart').chart;
                    for (var i = 0; i < 20; i++) {
                        data.push((Math.random() * 15) + 15); 
                    } 
                    Ext.getCmp('main_chart').addSeries([{
                        name: chart.series.length + ' days ago',
                        data: data,
                        type: 'spline'
                    }], true);
                }
            },

            // Click on entry in the left tree
            'chartsTree' : {
                itemclick : function(view, model, item) {
                    // Store from the chart
                    var store = null, chartStore = null;
                    var selectedType = model.data.id.split('/')[1];
                    var prevSelected = Ext.getCmp('leftTree').prevSelected;
                    Ext.getCmp('leftTree').prevSelected = selectedType;

                    // Destroy the current on and load a new one
                    var mainChart = Ext.getCmp('main_chart');
                    if (mainChart) {
                        chartStore = mainChart.store;
                        Ext.getCmp('centerpane').remove(mainChart);
                        mainChart.destroy();
                        chartStore && chartStore.destroy();

                        // Remove any existing gauge task
                        Demo.gaugeRunnerTask && 
                            (Demo.gaugeRunnerTask = Demo.gaugeRunnerTask.destroy());
                    }

                    // Generate the highchart config based on the selected type
                    // Create the store if not exists
                    var configs = Highcharts.ChartsDesktopConfig;
                    var hcConfg = null;
                    var reloadDisabled = false;

                    // Clear up special purpose widget
                    Ext.getCmp('addSeries').setDisabled(true);

                    var initLoad = true;

                    switch (selectedType) {
                    case 'spline':
                        hcConfig = configs.getSpline();
                        store = Ext.create('Highcharts.store.Temperature');
                        break;
                    case 'splineNoAnim':
                        hcConfig = configs.getSplineNoAnim();
                        store = Ext.create('Highcharts.store.Temperature');
                        break;
                    case 'splineCatShift':
                        hcConfig = configs.getSplineCatShift();
                        store = Ext.create('Highcharts.store.Temperature');
                        break;
                    case 'splineNumShift':
                        hcConfig = configs.getSplineNumShift();
                        store = Ext.create('Highcharts.store.NumericTemperature');
                        break;
                    case 'drawHiddenSeries':
                        hcConfig = configs.getDrawHiddenSeries();
                        store = Ext.create('Highcharts.store.NumericTemperature');
                        break;
                    case 'splineAddSeries': 
                        hcConfig = configs.getSplineAddSeries();
                        store = Ext.create('Highcharts.store.Temperature');
                        break;
                    case 'splineNullData': 
                        hcConfig = configs.getSplineNullData();
                        store = Ext.create('Highcharts.store.NullTemperature');
                        break;
                    case 'splineIrregular':
                        hcConfig = configs.getSplineIrregular();
                        store = Ext.create('Highcharts.store.IrregularData');
                        break;
                    case 'splineNoStore':
                        hcConfig = configs.getSplineNoStore();
                        reloadDisabled = true;
                        break;
                    case 'splinePopup':
                        hcConfig = configs.getSplinePopup();
                        store = Ext.create('Highcharts.store.NumericTemperature');
                        break;
                    case 'splineNoInitAnim':
                        hcConfig = configs.getSpline();
                        hcConfig.initAnimAfterLoad = false;
                        hcConfig.chartConfig.title.text = "No initial data, click reload to draw data";
                        store = Ext.create('Highcharts.store.Temperature');
                        initLoad = false;
                        break;
                    case 'splineAfterRenderedCallback':
                        hcConfig = configs.getSplineAfterRenderedCallback();
                        store = Ext.create('Highcharts.store.NumericTemperature');
                        break;
                    case 'column3d':
                        hcConfig = configs.getColumn3d();
                        store = Ext.create('Highcharts.store.Temperature');
                        break;
                    case 'column':
                        hcConfig = configs.getColumn();
                        store = Ext.create('Highcharts.store.Temperature');
                        break;
                    case 'pie3d':
                        hcConfig = configs.getPie3d();
                        store = Ext.create('Highcharts.store.TempSummary');
                        break;
                    case 'pie':
                        hcConfig = configs.getPie();
                        store = Ext.create('Highcharts.store.TempSummary');
                        break;
                    case 'scatter3d':
                        hcConfig = configs.getScatter3d();
                        store = Ext.create('Highcharts.store.Scatter3d');
                        break;
                    case 'scatter':
                        hcConfig = configs.getScatter();
                        store = Ext.create('Highcharts.store.Scatter');
                        break;
                    case 'donut':
                        hcConfig = configs.getDonut();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Browsers');
                        break;
                    case 'columnDrillDown':
                        hcConfig = configs.getColumnDrillDown();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Browsers');
                        store.getProxy().extraParams.total = true;
                        break;
                    case 'gauge':
                        hcConfig = configs.getGauge();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Speedometer');
                        break;
                    case 'arearange_unsorted':
                        hcConfig = configs.getAreaRangeUnsorted();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Stock');
                        break;
                    case 'arearange_sorted':
                        hcConfig = configs.getAreaRangeSorted();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Stock');
                        break;
                    case 'columnrange':
                        hcConfig = configs.getColumnRange();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Stock');
                        break;
                    case 'polar':
                        hcConfig = configs.getPolar();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.NetworkUsage');
                        break;
                    case 'star':
                        hcConfig = configs.getStar();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.BrowsersJune');
                        break;
                    case 'bubblesingle':
                        hcConfig = configs.getBubbleSingle();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.BubbleSingle');
                        break;
                    case 'bubblemulti':
                        hcConfig = configs.getBubbleMulti();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.BubbleMulti');
                        break;
                    case 'error':
                        hcConfig = configs.getErrorBar();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.Stock');
                        break;
                    case 'boxplot':
                        hcConfig = configs.getBoxPlot();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.BoxPlotStore');
                        break;
                    case 'waterfall':
                        hcConfig = configs.getWaterfall();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.WaterfallStore');
                        break;
                    case 'pyramid':
                        hcConfig = configs.getPyramid();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.FunnelStore');
                        break;
                    case 'funnel':
                        hcConfig = configs.getFunnel();
                        reloadDisabled = true;
                        store = Ext.create('Highcharts.store.FunnelStore');
                        break;
                    case 'test1':
                        hcConfig = configs.getTest1();
                        store = Ext.create('Highcharts.store.IrregularData');
                        break;
                    case 'test2':
                        hcConfig = configs.getTest2();
                        store = Ext.create('Highcharts.store.TempSummary');
                        break;
                    case 'test3':
                        hcConfig = configs.getTest3();
                        store = Ext.create('Highcharts.store.TempSummary');
                        break;
                        // Test updateOnNoRecord
                    case 'test4':
                        hcConfig = configs.getTest4();
                        store = Ext.create('Highcharts.store.UpdateNoRecord');
                        break;
                        // Test loadmask
                    case 'test5':
                        hcConfig = configs.getTest5();
                        store = Ext.create('Highcharts.store.Scatter');
                        store.getProxy().extraParams = {
                            delay: 5
                        };
                        break;
                        // Test reload on diff no. of data points - pie chart
                    case 'test6':
                        hcConfig = configs.getTest6();
                        store = Ext.create('Highcharts.store.IQ');
                        break;
                    }

                    store && (store.getProxy().extraParams.demo = selectedType);

                    // Stop switching back to the chart and change the series
                    // data inside the config
                    hcConfig = Ext.clone(hcConfig);

                    // New chart with config and id
                    hcConfig.id = 'main_chart';
                    mainChart = Ext.widget('highchart', hcConfig);
                    store && mainChart.bindStore(store, true);
                    Ext.getCmp('centerpane').add(mainChart);
                    initLoad && store && store.load();

                    // Enable all the chart relate buttons
                    Ext.getCmp('reload').setDisabled(reloadDisabled);
                }

            }
        });
    }

});
