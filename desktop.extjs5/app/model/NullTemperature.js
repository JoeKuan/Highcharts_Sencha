Ext.define('Highcharts.model.NullTemperature', {
  extend : 'Ext.data.Model',
  fields : [{
    name : 'time',
    type : 'string'
  }, {
    name : 'yesterday',
    type : 'float',
    useNull: true
  }, {
    name : 'today',
    type : 'float',
    useNull: true
  }]
});
