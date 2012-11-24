Ext.define('Highcharts.store.Browsers', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : { 
      type: 'ajax',
      url: './data/browsers.php',
      reader : {
        type: 'json',
        rootProperty: 'rows'
      }
    }
  }
});
