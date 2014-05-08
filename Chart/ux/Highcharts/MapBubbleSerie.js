/***
 * MapBubble Serie class is for plotting bubble data points on the map.
 * Expect z-axis value from the data store.
 */
Ext.define('Chart.ux.Highcharts.MapBubbleSerie', {
    extend : 'Chart.ux.Highcharts.MapSerie',
    alternateClassName: [ 'highcharts.mapbubble' ],
    type : 'mapbubble',

    /**
     * @cfg {String} zField
     * The field used to access the z value (bubble size) from the data
     * source. 
     *
     * See [Highmaps series data for detail](http://api.highcharts.com/highmaps#series.data.z)
     */
    zField: 'z',

    getData: function(record) {

    	var data = {};

	this.dataCodeField && (data[this.dataCodeField] = record.data[this.dataCodeField]);

	Ext.apply(data, {
	    path: this.dataPathField && record.data[this.dataPathField],
	    name: this.dataNameField && record.data[this.dataNameField],
	    color: this.dataColorField && record.data[this.dataColorField],
	    z: record.data[this.zField]
	});

	return data;
    }
});
