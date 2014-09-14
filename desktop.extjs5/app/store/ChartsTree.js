Ext.define('Highcharts.store.ChartsTree', {
    extend: 'Ext.data.TreeStore',
    proxy: {
      type: 'ajax',
      url: './data/get-charts.php'
    },
    rootProperty: {
      text: 'Charts',
      id: 'charts',
      expanded: true
    }
});
