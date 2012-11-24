Ext.define('Highcharts.store.NullTemperature', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config : {
    proxy : {
      type : 'ajax',
      url : './data/temp_example.php',
      extraParams: { random: 1 },
      reader : {
        type : 'json',
        rootProperty : 'rows'
      }
    }
  }
});
