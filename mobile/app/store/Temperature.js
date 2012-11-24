Ext.define('Highcharts.store.Temperature', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  storeId: 'temperature',
  config: {
     proxy: {
       type : 'ajax',
       url : 'data/temp_example.php',
       extraParams: { summary: 0 },
       reader : {
         type : 'json',
         rootProperty : 'rows'
       }
    }
  }
});
