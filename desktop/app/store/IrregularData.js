Ext.define('Highcharts.store.IrregularData', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.IrregularData',
  proxy : { 
    type: 'ajax',
    url: './data/irregular.php',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'irregularData'
});

