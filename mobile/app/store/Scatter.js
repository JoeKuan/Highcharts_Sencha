Ext.define('Highcharts.store.Scatter', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : {
      type : 'ajax',
      url : './data/scatter.php',
      reader : {
        type : 'json',
        rootProperty : 'rows'
      }
    }
  }
});
