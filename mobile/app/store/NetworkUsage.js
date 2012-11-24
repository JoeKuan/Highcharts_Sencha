Ext.define('Highcharts.store.NetworkUsage', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : { 
      type: 'ajax',
      url: './data/netusage.php',
      reader : {
        type: 'json',
        rootProperty: 'rows'
      }
    }
  }
});

