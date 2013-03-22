Ext.define('Highcharts.store.UpdateNoRecord', {
  extend : 'Ext.data.Store',
  model : 'Highcharts.model.Temperature',
  autoLoad : false,
  proxy : {
    type : 'ajax',
    url : './data/noRecord.php',
    reader : {
      type : 'json',
      root : 'rows'
    }
  },
  storeId: 'updateNoRecord'
});
