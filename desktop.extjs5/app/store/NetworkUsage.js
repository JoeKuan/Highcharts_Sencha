Ext.define('Highcharts.store.NetworkUsage', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.NetworkUsage',
  proxy : { 
    type: 'ajax',
    url: './data/netusage.php',
    reader : {
      type: 'json',
      rootProperty: 'rows'
    }
  },
  storeId: 'networkusage'
});

