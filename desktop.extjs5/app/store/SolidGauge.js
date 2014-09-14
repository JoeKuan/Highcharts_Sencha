Ext.define('Highcharts.store.SolidGauge', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Speedometer',
  proxy : { 
    type: 'ajax',
    url: './data/random_speed.php',
    reader : {
      type: 'json',
      rootProperty: 'rows'
    }
  },
  storeId: 'solidgauge'
});

