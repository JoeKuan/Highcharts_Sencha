Ext.define('Highcharts.store.NumericTemperature', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : {
      type : 'ajax',
      url : './data/temp_example.php',
      extraParams: { summary: 0, numeric: 1 },
      reader : {
        type : 'json',
        // In ExtJs, this is 'root'
        rootProperty : 'rows'
      }
    }
  }
});
