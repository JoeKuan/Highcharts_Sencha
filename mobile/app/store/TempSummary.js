Ext.define('Highcharts.store.TempSummary', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : {
      type : 'ajax',
      url : './data/temp_example.php',
      extraParams: { summary: 1 },
      reader : {
        type : 'json',
        rootProperty : 'rows'
      }
    }
  }
});
