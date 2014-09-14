Ext.define('Highcharts.model.Temperature', {
  extend : 'Ext.data.Model',
  fields : [{
    name : 'time',
    type : 'string'
  }, {
    name : 'yesterday',
    type : 'float'
  }, {
    name : 'today',
    type : 'float'
  }]
});
