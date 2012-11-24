Ext.define('Highcharts.model.Speedometer', {
  extend : 'Ext.data.Model',
  config: {
    fields : [{
      name : 'rpm',
      type : 'float'
    }, {
      name : 'speed',
      type : 'float'
    }]
  }
});
