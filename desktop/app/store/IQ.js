Ext.define('Highcharts.store.IQ', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.IQ',
  proxy : { 
    type: 'ajax',
    url: './data/iq.php',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'IQ'
});
