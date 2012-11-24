Ext.define('Highcharts.store.BrowsersJune', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  config: {
    proxy : { 
      type: 'ajax',
      url: './data/browsers_june.php',
      reader : {
        type: 'json',
        rootProperty: 'rows'
      }
    }
  }
});
