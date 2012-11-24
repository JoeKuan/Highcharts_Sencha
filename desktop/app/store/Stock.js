Ext.define('Highcharts.store.Stock', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Stock',
  proxy : { 
    type: 'ajax',
    url: './data/stock.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'stock'
});

