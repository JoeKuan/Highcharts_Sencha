Ext.define('Highcharts.store.Speedometer', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : { 
      type: 'ajax',
      url: './data/speed.php',
      reader : {
        type: 'json',
        rootProperty: 'rows'
      }
    }
  }
});

