Ext.define('Highcharts.store.BoxPlotStore', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.BoxPlotData',
  proxy : { 
    type: 'ajax',
    url: './data/boxplot.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'boxplot'
});

