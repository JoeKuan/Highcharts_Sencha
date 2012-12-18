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
 * @class Chart.ux.Highcharts.RangeSerie
 * @extends Chart.ux.Highcharts.Serie
 * RangeSerie class for the range charts widget.
 * @constructor
 */
Ext.define('Chart.ux.Highcharts.RangeSerie', {
	extend : 'Chart.ux.Highcharts.Serie',

	minDataIndex: null,
	maxDataIndex: null,
	needSorting: null,

	constructor: function(config) {
		if (Ext.isArray(config.dataIndex)) {
			this.field1 = config.dataIndex[0];
			this.field2 = config.dataIndex[1];
			this.needSorting = true;
		} else if (config.minDataIndex && config.maxDataIndex) {
			this.minDataIndex = config.minDataIndex;
			this.maxDataIndex = config.maxDataIndex;
			this.needSorting = false;
		}
		this.callParent(arguments);
	},

	getData: function(record, index) {
		if (this.needSorting === true) {
			return (record.data[this.field1] > record.data[this.field2]) ? [ record.data[this.field2], record.data[this.field1] ] : [ record.data[this.field1], record.data[this.field2] ];
		}

		if (record.data[this.minDataIndex] !== undefined && record.data[this.maxDataIndex] !== undefined) {
			return ([record.data[this.minDataIndex], record.data[this.maxDataIndex]]);
		}
	}
});