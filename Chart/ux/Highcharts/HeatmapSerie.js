/***
 * Heatmap is part of the Highcharts series (i.e. no store in it's own series definition) and is
 * packaged as a module. Therefore, users need to include the module in their HTML file.
 *
 *     <script src="http://code.highcharts.com/maps/modules/heatmap.js"></script>
 *
 * To configure a heatmap series, 3 fields are mandatory: xField, yField and valueField.
 * The following is an example of a series configuration:
 *
 *      xtype: 'highcharts',
 *      chartConfig: {
 *           ....
 *      },
 *      series: [{
 *          type: 'heatmap',
 *          xField: 'Date',
 *          yField: 'Time',
 *          dataIndex: 'Temperature',
 *
 *          borderWidth: 0,
 *          colsize: 24 * 3600000, // one day
 *          tooltip: {
 *              headerFormat: 'Temperature<br/>',
 *              pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
 *          }
 *      }]
 */
Ext.define('Chart.ux.Highcharts.HeatmapSerie', {
    extend : 'Chart.ux.Highcharts.Serie',
    alternateClassName: [ 'highcharts.heatmap' ],
    type : 'heatmap',

    /***
     *  @cfg colorField
     *  @private
     */

    /***
     *  @cfg xField
     *  mandatory field for the heatmap x-axis
     */
    xField: null,

    /***
     *  @cfg yField
     *  mandatory field for the heatmap y-axis
     */
    yField: null,

    /***
     *  @cfg dataIndex
     *  mandatory field for the value of a heatmap cell
     */
    dataIndex: null,

    getData: function(record) {
	return [
	    record.data[this.xField],
	    record.data[this.yField],
	    record.data[this.dataIndex]
	];
    }
});
