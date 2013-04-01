Ext.define('Highcharts.store.BubbleSingle', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.BubbleSingle',
  proxy : { 
    type: 'ajax',
    url: './data/bubblesingle.json',
    extraParams: {
        delay: 5
    },
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'BubbleSingle'
});

