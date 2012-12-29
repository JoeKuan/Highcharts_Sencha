/***
 * Serie class is the base class for all the series types. Users shouldn't use any of the 
 * series classes directly, they are created internally from Chart.ux.Highcharts depending on the
 * series configuration.
 *
 * Serie class is a general class for series data representation. 
 * # Mapping data fields 
 * In the Highcharts extension, the series option is declared outside of chartConfig, so as the *xField*. 
 * There is a subtle difference for declaring xField outside or inside a series. For example:
 *
 *     series:[{
 *        name: 'Share A',
 *        type: 'line',
 *        yField: 'sharePriceA'
 *     }, {
 *        name: 'Share B',
 *        type: 'line',
 *        yField: 'sharePriceB'
 *     }],
 *     xField: 'datetime',
 *     ....
 * This means both series share the same categories and each series has it own set of y-values. 
 * In this case, the datetime field can be either string or numerical representation of date time.
 *     series:[{
 *        name: 'Share A',
 *        type: 'line',
 *        yField: 'sharePriceA',
 *        xField: 'datetimeA'
 *     }, {
 *        name: 'Share B',
 *        type: 'line',
 *        yField: 'sharePriceB',
 *        xField: 'datetimeB'
 *     }],
 * This means both series have their own (x,y) data. In this case, the xField must refer to numerical values.
 */
Ext.define('Chart.ux.Highcharts.Serie', {
	requires: 'Chart.ux.Highcharts',

  /***
   * @cfg {String} type 
   * Highcharts series type name. This field must be specified.
   *
   * Line, area, scatter and column series are the simplest form of charts 
   * (includes Polar) which has the simple data mappings: *dataIndex* or *yField* 
   * for y-axis values and xField for either x-axis category field or data point's 
   * x-axis coordinate.
   *     series: [{
   *        type: 'scatter',
   *        xField: 'xValue',
   *        yField: 'yValue'
   *     }]
   */
	type : null,

	/**
   * @private
	 * The default action for series point data is to use array instead of point object
	 * unless desired to set point particular field. This changes the default behaviour
	 * of getData template method
	 * Default: false
	 *
	 * @type Boolean
	 */
	pointObject: false,

	/**
	 * @cfg {String} xField
	 * The field used to access the x-axis value from the items from the data
	 * source. Store's record
	 */
	xField : null,

	/**
	 * @cfg {String} yField
	 * The field used to access the y-axis value from the items from the data
	 * source. Store's record
	 */
	yField : null,

	/**
	 * @cfg {String} dataIndex alias of *yField* which has higher precedence if both are defined
	 */
	dataIndex : null,

	/**
   * @cfg {String} colorField
	 * This field is used for setting data point color
	 * number or color hex in '#([0-9])'. Otherwise, the option
	 * is treated as a field name and the store should return 
   * rows with the same color field name. For column type series, if you
   * want Highcharts to automatically color each data point,
   * then you should use [plotOptions.column.colorByPoint][link2] option in the series config
   * [link2]: http://api.highcharts.com/highcharts#plotOptions.column.colorByPoint
	 */
	colorField: null,

	/**
	 * @cfg {Boolean} visible
	 * The field used to hide the serie initial. Defaults to true.
	 */
	visible : true,

	clear : Ext.emptyFn,

	/***
   * @private
   * Resolve color based on the value of colorField
   */
	resolveColor: function(colorField, record, dataPtIdx) {

		var color = null;
		if (colorField) {
			if (Ext.isNumeric(colorField)) {
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

  /***
   * @private
   * object style of getData
   */
	obj_getData : function(record, index) {
		var yField = this.yField || this.dataIndex, point = {
			data : record.data,
			y : record.data[yField]
		};
		this.xField && (point.x = record.data[this.xField]);
		this.colorField && (point.color = this.resolveColor(this.colorField, record, index));
		return point;
	},

  /***
   * @private
   * single value data version of getData - Common category, individual y-data
   */
	arr_getDataSingle: function(record, index) {
		return record.data[this.yField];
	},

  /***
   * @private
   * each data point in the series is represented in it's own x and y values
   */
	arr_getDataPair: function(record, index) {
		return [ record.data[ this.xField ], record.data[ this.yField ] ];
	},

  /***
   * @method getData
   * getData is the core mechanism for transferring from Store's record data into the series data array.
   * This routine acts as a Template Method for any series class, i.e. any new series type class must 
   * support this method.
   * 
   * Generally, you don't need to override this method in the config because this method is internally
   * created once the serie class is instantiated. Depending on whether *xField*, *yField* and 
   * *colorField* are defined, the class constructor creates a *getData* method which either returns a single value,
   * tuple array or a data point object. This is done for performance reason. See Highcharts API document
   * [Series.addPoint][link1] for more details.
   *
   * If your data model requires specific data processing in the record data, then you may need to
   * override this method. The return for the method must confine to the [Series.addPoint][link1]
   * prototype. Note that if this method is manually defined, there is no need to define field name options
   * because this can be specified inside the implementation anyway
   *     series: [{
   *         type: 'spline',
   *         // Return avg y values
   *         getData: function(record) {
   *             return (record.data.y1 + record.data.y2) / 2;
   *         }
   *     }],
   *     xField: 'time',
   *     ....
   *
   * [link1]: http://api.highcharts.com/highcharts#Series.addPoint()
   *
   * @param {Object} record Store's record which contains the series data at particular instance
   * @param {Number} index the index value of the record inside the Store
   * @return {Object|Array|Number}
   */
  getData: null,

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
