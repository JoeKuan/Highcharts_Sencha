Ext.define('Highcharts.store.ChartsTree', {
    extend: 'Ext.data.TreeStore',
    proxy: {
      type: 'ajax',
      url: './data/get-charts.php'
    },
    root: {
      text: 'Charts',
      id: 'charts',
      expanded: true
    }
});
