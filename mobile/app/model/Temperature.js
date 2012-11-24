Ext.define('Highcharts.model.Temperature', {
  extend : 'Ext.data.Model',
  config: {
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
  }
});
