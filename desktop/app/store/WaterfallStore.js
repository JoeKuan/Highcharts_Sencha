Ext.define('Highcharts.store.WaterfallStore', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Waterfall',
  proxy : { 
    type: 'ajax',
    url: './data/waterfall.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'waterfall'
});

