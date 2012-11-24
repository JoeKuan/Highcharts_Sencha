Ext.define('Highcharts.model.NullTemperature', {
  extend : 'Ext.data.Model',
  config: {
    fields : [{
      name : 'time',
      type : 'string'
    }, {
      name : 'yesterday',
      type : 'float',
      allowNull: true
    }, {
      name : 'today',
      type : 'float',
      allowNull: true
    }]
  }
});
