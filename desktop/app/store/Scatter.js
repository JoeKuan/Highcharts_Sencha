Ext.define('Highcharts.store.Scatter', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Scatter',
  proxy : {
    type : 'ajax',
    url : './data/scatter.php',
    reader : {
      type : 'json',
      root : 'rows'
    }
  },
  storeId: 'temperature'
});
