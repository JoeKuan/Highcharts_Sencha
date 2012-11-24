Ext.define('Highcharts.store.TempSummary', {
  extend : 'Ext.data.Store',
  model : 'Highcharts.model.TempSummary',
  autoLoad : false,
  proxy : {
    type : 'ajax',
    url : './data/temp_example.php',
    extraParams: { summary: 1 },
    reader : {
      type : 'json',
      root : 'rows'
    }
  },
  storeId: 'tempsummary'
});
