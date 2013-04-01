Ext.define('Highcharts.store.FunnelStore', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Funnel',
  proxy : { 
    type: 'ajax',
    url: './data/funnel.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'funnel'
});

