Ext.define('Highcharts.model.BoxPlotData', {
  extend : 'Ext.data.Model',
  fields : [{ 
     name: 'experiment', type: 'integer'
  }, {
     name: 'min', type: 'integer'
  }, {
     name: 'q1', type: 'integer'
  }, {
     name: 'med', type: 'integer'
  }, {
     name: 'q2', type: 'integer'
  }, {
     name: 'max', type: 'integer'
  }]
});
