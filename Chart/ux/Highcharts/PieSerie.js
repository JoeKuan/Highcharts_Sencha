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
 * @class Chart.ux.Highcharts.PieSerie
 * @extends Chart.ux.Highcharts.Serie
 * PieSerie class for the charts widget.
 * @constructor
 */
Ext.define('Chart.ux.Highcharts.PieSerie', {
	extend : 'Chart.ux.Highcharts.Serie',
	alternateClassName: [ 'highcharts.pie' ],
	type : 'pie',

	/**
	 * Categoriefield
	 */
	categorieField : null,

	/**
	 * totalDataField
	 */
	totalDataField : false,

	/**
	 * Datafield
	 */
	dataField : null,

	/**
	 *
	 */
	useTotals : false,

	/**
	 * Columns
	 */
	columns : [],

	constructor : function(config) {
		this.callParent(arguments);
		if(this.useTotals) {
			this.columnData = {};
			var length = this.columns.length;
			for(var i = 0; i < length; i++) {
				this.columnData[this.columns[i]] = 100 / length;
			}
		}
	},

	//private
	addData : function(record) {
		for(var i = 0; i < this.columns.length; i++) {
			var c = this.columns[i];
			this.columnData[c] = this.columnData[c] + record.data[c];
		}
	},

	//private
	update : function(record) {
		for(var i = 0; i < this.columns.length; i++) {
			var c = this.columns[i];
			if(record.modified[c])
				this.columnData[c] = this.columnData[c] + record.data[c] - record.modified[c];
		}
	},

	//private
	removeData : function(record, index) {
		for(var i = 0; i < this.columns.length; i++) {
			var c = this.columns[i];
			this.columnData[c] = this.columnData[c] - record.data[c];
		}
	},

	//private
	clear : function() {
		for(var i = 0; i < this.columns.length; i++) {
			var c = this.columns[i];
			this.columnData[c] = 0;
		}
	},

	//private
	getData : function(record, seriesData) {

		// Summed up the category among the series data
		if(this.totalDataField) {
			var found = null;
			for(var i = 0; i < seriesData.length; i++) {
				if(seriesData[i].name == record.data[this.categorieField]) {
					found = i;
					seriesData[i].y += record.data[this.dataField];
					break;
				}
			}
			if(found === null) {
				if (this.colorField && record.data[this.colorField]) {
					seriesData.push({
						name: record.data[this.categorieField],
						y: record.data[this.dataField],
						color: record.data[this.colorField]
					});
				} else {
					seriesData.push({
						name: record.data[this.categorieField],
						y: record.data[this.dataField]
					});
				}
				i = seriesData.length - 1;
			}
			return seriesData[i];
		}

		if(this.useTotals) {
			this.addData(record);
			return [];
		}

		if (this.colorField && record.data[this.colorField]) {
			return {
				name: record.data[this.categorieField],
				y: record.data[this.dataField],
				color: record.data[this.colorField]
			};
		} else {
			return {
				name: record.data[this.categorieField],
				y: record.data[this.dataField]
			};
		}
	},

	getTotals : function() {
		var a = new Array();
		for(var i = 0; i < this.columns.length; i++) {
			var c = this.columns[i];
			a.push([c, this.columnData[c]]);
		}
		return a;
	}

});