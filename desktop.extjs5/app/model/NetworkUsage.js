Ext.define('Highcharts.model.NetworkUsage', {
  extend : 'Ext.data.Model',
  fields : [{
    name : 'time',
    type : 'string'
  }, {
    name : 'lab',
    type : 'float'
  }, {
    name : 'support',
    type : 'float'
  }, {
    name : 'sales',
    type : 'float'
  }, {
    name : 'logistic',
    type : 'float'
  }]
});
