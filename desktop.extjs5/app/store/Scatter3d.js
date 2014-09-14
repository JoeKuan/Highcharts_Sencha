Ext.define('Highcharts.store.Scatter3d', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Scatter3d',
  proxy : {
    type : 'ajax',
    url : './data/scatter3d.php',
    reader : {
      type : 'json',
      rootProperty : 'rows'
    }
  },
  storeId: 'scatter3d'
});
