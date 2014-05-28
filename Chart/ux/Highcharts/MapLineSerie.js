/***
 * MapLine Serie class is for drawing a boundaries line on the map.
 * The data store should return name, path, and optional color fields.
 */
Ext.define('Chart.ux.Highcharts.MapLineSerie', {
    extend : 'Chart.ux.Highcharts.MapSerie',
    alternateClassName: [ 'highcharts.mapline' ],
    type : 'mapline'
});
