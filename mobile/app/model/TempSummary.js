Ext.define('Highcharts.model.TempSummary', {
  extend : 'Ext.data.Model',
  config: {
    fields : [{
      name : 'time',
      type : 'string'
    }, {
      name : 'temperature',
      type : 'int'
    }]
  }
});
