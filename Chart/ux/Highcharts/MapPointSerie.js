/***
 * MapPoint Serie class is generally for drawing point of interest (POI) on the map
 * Expect x and y coordinates data from the store.
 */
Ext.define('Chart.ux.Highcharts.MapPointSerie', {
    extend : 'Chart.ux.Highcharts.MapSerie',
    alternateClassName: [ 'highcharts.mappoint' ],
    type : 'mappoint',

    /**
     * @cfg {String} xField
     * The field is used to access the x-axis value from the data
     * source. The x coordinate of a map point
     *
     * See [Highmaps series data for detail](http://api.highcharts.com/highmaps#series.data.x)
     */
    xField : 'x',

    /**
     * @cfg {String} yField
     * The field used to access the y-axis value from the data
     * source. The y coordinate of a map point
     *
     * See [Highmaps series data for detail](http://api.highcharts.com/highmaps#series.data.y)
     */
    yField : 'y',

    getData: function(record) {

    	var data = {};

	this.dataCodeField && (data[this.dataCodeField] = record.data[this.dataCodeField]);

	Ext.apply(data, {
	    name: this.dataNameField && record.data[this.dataNameField],
	    color: this.dataColorField && record.data[this.dataColorField],
	    x: record.data[this.xField],
	    y: record.data[this.yField]
	});

	return data;
    }

});
