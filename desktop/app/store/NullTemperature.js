Ext.define('Highcharts.store.NullTemperature', {
  extend : 'Ext.data.Store',
  model : 'Highcharts.model.NullTemperature',
  autoLoad : false,
  proxy : {
    type : 'ajax',
    url : './data/temp_example.php',
    extraParams: { random: 1 },
    reader : {
      type : 'json',
      root : 'rows'
    }
  },
  storeId: 'temperature'
});
