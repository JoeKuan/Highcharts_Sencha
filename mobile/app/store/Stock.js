Ext.define('Highcharts.store.Stock', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : { 
      type: 'ajax',
      url: './data/stock.json',
      reader : {
        type: 'json',
        rootProperty: 'rows'
      }
    }
  }
});

