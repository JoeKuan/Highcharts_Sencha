Ext.define('Highcharts.model.Waterfall', {
  extend : 'Ext.data.Model',
  fields : [{ 
     name: 'category', type: 'string'
  }, {
     name: 'value', type: 'integer'
  }, {
     name: 'color', type: 'string'
  }, {
     name: 'sum', type: 'string'
  }]
});
