Ext.define('Highcharts.store.BubbleMulti', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.BubbleMulti',
  proxy : { 
    type: 'ajax',
    url: './data/bubblemulti.json',
    extraParams: {
        delay: 5
    },
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'BubbleMulti'
});

