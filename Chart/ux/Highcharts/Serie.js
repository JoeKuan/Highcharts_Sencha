/**
 * @author Joe Kuan (much improved & ported from ExtJs 3 highchart adapter)
 * @email kuan.joe@gmail.com
 * @version 2.2.3
 * @date 1 Dec 2012
 *
 * Highcharts extension for Sencha Ext JS 4 and Touch 2
 *
 * You are not permitted to remove the author section from this file.
 */

/**
 * @class Ext.ux.Highcharts.Serie
 * Series class for the highcharts widget.
 * @constructor
 */
Ext.define('Chart.ux.Highcharts.Serie', {
	requires: 'Chart.ux.Highcharts',
	type : null,

	/**
	 * The default action for series point data is to use array instead of point object
	 * unless desired to set point particular field. This changes the default behaviour
	 * of getData template method
	 * Default: false
	 *
	 * @type Boolean
	 */
	pointObject: false,

	/**
	 * The field used to access the x-axis value from the items from the data
	 * source.
	 *
	 * @property xField
	 * @type String
	 */
	xField : null,

	/**
	 * The field used to access the y-axis value from the items from the data
	 * source.
	 *
	 * @property yField
	 * @type String
	 */
	yField : null,

	/**
	 * This field is use for setting data point color
	 * 'auto' - Automatically assign color based on Highcharts
	 *          color order. Do not use legend with this
	 * number or '#([0-9])' - set the color as this value
	 * string - treat this as a field name and expect the
	 *          store returns rows with color field
	 */
	colorField: null,

	/**
	 * The field used to hide the serie initial. Defaults to true.
	 *
	 * @property visible
	 * @type boolean
	 */
	visible : true,

	clear : Ext.emptyFn,

	// Resolve color based on the value of colorField
	resolveColor: function(colorField, record, dataPtIdx) {

		var color = null;
		if (colorField) {
			if (colorField === 'auto') {
				// Incremental as Highcharts colors
				color = Highcharts.getOptions().colors[dataPtIdx] || Highcharts.getOptions().colors[0];
			} else if (Ext.isNumeric(colorField)) {
				color = colorField;
			} else if (Ext.isString(colorField)) {
				if (/^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test(colorField)) {
					color = colorField;
				} else {
					color = record.data[colorField];
				}
			}
		}
		console.log("resolveColor " + colorField + ", " + color);
		return color;
	},

	obj_getData : function(record, index) {
		var yField = this.yField || this.dataIndex, point = {
			data : record.data,
			y : record.data[yField]
		};
		this.xField && (point.x = record.data[this.xField]);
		this.colorField && (point.color = this.resolveColor(this.colorField, record, index));
		return point;
	},

	arr_getDataSingle: function(record, index) {
		return record.data[this.yField];
	},

	arr_getDataPair: function(record, index) {
		return [ record.data[ this.xField ], record.data[ this.yField ] ];
	},

	serieCls : true,

	constructor : function(config) {
		config.type = this.type;
		if(!config.data) {
			config.data = [];
		}
		Ext.apply(this, config);
		this.config = config;

		this.yField = this.yField || this.dataIndex;

		// If colorField is defined, then we have to use data point
		// as object
		this.colorField && (this.pointObject = true);

		// If getData method is already defined, then overwrite it
		if (!this.getData) {
			if (this.pointObject) {
				this.getData = this.obj_getData;
			} else if (this.xField) {
				this.getData = this.arr_getDataPair;
			} else {
				this.getData = this.arr_getDataSingle;
			}
		}
	}

});