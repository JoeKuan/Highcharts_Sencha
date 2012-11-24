Ext.define('Highcharts.model.Stock', {
  extend : 'Ext.data.Model',
  config: {
    fields : [{
      name : 'date',
      type : 'string'
    }, {
      name : 'open',
      type : 'float'
    }, {
      name : 'close',
      type : 'float'
    }, {
      name : 'high',
      type : 'float'
    }, {
      name : 'low',
      type : 'float'
    }]
  }
});
