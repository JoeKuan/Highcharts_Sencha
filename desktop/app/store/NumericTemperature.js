Ext.define('Highcharts.store.NumericTemperature', {
  extend : 'Ext.data.Store',
  model : 'Highcharts.model.NumericTemperature',
  autoLoad : false,
  proxy : {
    type : 'ajax',
    url : './data/temp_example.php',
    extraParams: { summary: 0, numeric: 1 },
    reader : {
      type : 'json',
      root : 'rows'
    }
  },
  storeId: 'temperature'
});
