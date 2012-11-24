Ext.define('Highcharts.model.NumericTemperature', {
  extend : 'Ext.data.Model',
  config: {
    fields : [{
      name : 'time',
      type : 'int'
    }, {
      name : 'yesterday',
      type : 'float'
    }, {
      name : 'today',
      type : 'float'
    }]
  }
});
