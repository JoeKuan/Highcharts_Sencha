/**
 * @author 
 * Joe Kuan <kuan.joe@gmail.com>
 *
 * version 3.0.0
 *
 * <!-- You are not permitted to remove the author section (above) from this file. -->
 *
 * Documentation last updated: 12 March 2014
 *
 * A much improved & ported from ExtJs 3 Highchart adapter. 
 *
 * - Supports the latest Highcharts
 * - Supports both Sencha ExtJs 4 and Touch 2
 * - Supports Highcharts animations
 * - Supports Highmaps
 *
 * In order to use this extension, users are expected to know how to use Highmaps and Sencha products (ExtJs 4 &amp; Touch 2).
 * 
 * # Highmaps Extension for Sencha
 *
 * The Highmaps extension has similar design and usage of Highcharts extension, the major difference is
 * that each series has it's own store definition instead. This is because the general 
 * concept of mapping software are structure in *layers*. The nature of data in each series (i.e. layer) 
 * can be different, hence having separates stores allows different data model for the layer which 
 * gives greater flexibility.

 * When a map is constructed with more than one stores, the extension will perform asynchronous load
 * on all the stores. Once all the data returned from the stores, the extension will structure the data and
 * generate a Highmaps configuration to render a map. 
 * 
 * The original Highmaps package can be loaded as a standalone library or a module for Highcharts.
 * So far the Highmaps extension for Sencha ExtJs is developed and tested as a module for Highcharts, 
 * such that
 * the Highmaps class is extended from the Highcharts class. As a result, users can create both 
 * charts and maps in the same application. The followings are the script tags loading Highmaps library:
 *
 *      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
 *      <script src="http://code.highcharts.com/highcharts.js"></script>
 *      <script src="http://code.highcharts.com/modules/map.js"></script>
 * 
 * # Configuring Highmaps Extension
 *
 * Suppose we have the following working Highmaps config (taken from the Basic map example) :
 *         
 *      $('#container').highcharts('Map', {
 *          title : {
 *              text : 'Population density by country (/km²)'
 *          },
 *          mapNavigation: {
 *              ....
 *          },
 *          colorAxis: {
 *              ....
 *          },
 *          series : [{
 *              data : data,
 *              mapData: Highcharts.maps.world,
 *              joinBy: 'code',
 *              name: 'Population density',
 *              states: {
 *                  hover: {
 *                      color: '#BADA55'
 *                  }
 *              },
 *              tooltip: {
 *                  valueSuffix: '/km²'
 *              }
 *          }]
 *      });
 *
 * ## Step 1. Create chartConfig without series
 * First, create a chartConfig object by copying the original Highmaps config without the
 * series option
 *
 *     chartConfig: {
 *          title : {
 *              text : 'Population density by country (/km²)'
 *          },
 *          mapNavigation: {
 *              ....
 *          },
 *          colorAxis: {
 *              ....
 *          }
 *     }
 *
 * ## Step 2. Put the series option on a higher level
 * Append the series option to a higher level. Internally, the extension will
 * process this series option, create a new series array (with map data) and
 * inside into the chartConfig
 * 
 *     chartConfig: {
 *          title : {
 *              text : 'Population density by country (/km²)'
 *          },
 *          mapNavigation: {
 *              ....
 *          },
 *          colorAxis: {
 *              ....
 *          }
 *     },
 *     series: [{
 *          ....
 *     }]
 *
 * ## Step 3. Convert data to the store
 * The final step is to convert series data into store. The following is the
 * the sample of the series data:
 *
 *      [{  "code": "HK",
 *          "value": 6783,
 *          "name": "Hong Kong SAR, China"
 *       }, {
 *          "code": "HU",
 *          "value": 112,
 *          "name": "Hungary"
 *       }, {
 *       .....
 * 
 * Assume a JsonStore, PopulationDensity, is created to return above data. Then
 * uses the MapSerie class options to map fields from the store, see 
 * {@link Chart.ux.Highcharts.MapSerie} for details.
 * Finally, change the constructor
 * to ExtJs style as follows:
 *
 *     var map = Ext.Create('Chart.ux.Highmaps', {
 *         chartConfig {
 *              ....
 *         },
 *         series : [{
 *             // Default series type is 'map', no need to specify
 *             store: Ext.StoreMgr.get('PopulationDensity'),
 *             // Map store fields to 'code', 'value', 'name' to 
 *             // join with 'mapData'.
 *             dataValueField: 'value',
 *             dataNameField: 'name',
 *             // No need to specify mapping for code as this
 *             // can be found in 'joinBy'
 * 
 *             mapData: Highcharts.maps.world,
 *             joinBy: 'code',
 *             name: 'Population density',
 *             states: {
 *                 hover: {
 *                     color: '#BADA55'
 *                 }
 *             },
 *             tooltip: {
 *                 valueSuffix: '/km²'
 *             }
 *        }]
 *     });
 *
 * Alternatively, xtype can be used to create Highmaps component:
 *
 *     xtype: 'highmaps',
 *     chartConfig: {
 *         ....
 *     },
 *     series: [{
 *         ....
 *     }]
 *
 * Note that series store option is optional, such that users can specify
 * series with data option like a native Highmaps series config
 *
 * # Drilldown 
 * Highmaps extension supports drilldown option with store. In order to do so,
 * the drilldown option must be located same as the series level. Such as:
 *
 *     chartConfig: {
 *         ....
 *     },
 *     series: [{
 *         ....
 *     }],
 *     drilldown: {
 *         store: Ext.StoreMgr.get('Drilldown'),
 *
 *         // other drilldown options
 *         activeDataLabelStyle: {
 *             color: 'white'
 *         },
 *         drillUpButton: {
 *             ....
 *         }
 *     }
 *
 * To link up the
 * data stores between series and drilldown, both stores need to have
 * some sort of id fields to associate with each other which are 
 * dataDrilldownField and idField for series and drilldown respectively.
 * 
 *     series : [{
 *         store: Ext.StoreMgr.get('USStates'),
 *         dataPathField: 'path',
 *         dataNameField: 'name',
 *         dataDrilldownField: 'drilldown',
 *         dataValueField: 'value',
 *         ....
 *     }],
 *     drilldown: {
 *         store: Ext.StoreMgr.get('Drilldown'),
 *         idField: 'id',
 *         pathField: 'path',
 *         parentIdField: 'parentId'
 *         ....
 *     }]         
 * 
 * So for the JSON data on the series side returning from the server 
 * should look like follows:
 *
 *     rows: [{
 *         ....
 *     }, {
 *         drilldown: "US.CA",
 *         name: "California",
 *         path: "M31.1,257.4 L29.9,257.7 ... ",
 *         value: 73.86
 *     }, {
 *
 * whereas the following is associated drilldown JSON data
 *
 *     rows: [{
 *         ....
 *     }, {
 *         id: "US.CA.013",
 *         name: "Contra Costa",
 *         parentId: "US.CA",
 *         path: "M26.3,185.0 L26.8 ... ",
 *         value: 51.9
 *     }, {
 *         id: "US.CA.083"
 *         name: "Santa Barbara"
 *         parentId: "US.CA"
 *         path: "M31.1,257.4 L29.9 ... ",
 *         value: 97.31
 *     }, {
 *
 * # Map Interaction: Click, Hover, Update, etc
 * To program map interaction, it is best via Highmaps event handler which
 * can be found in [plotOptions.series.points.events](http://api.highcharts.com/highmaps#plotOptions.series.point.events). For example: the following code shows how to bring up a popup menu from clicking a map region click:
 *
 *     chartConfig: {
 *         ....
 *         plotOptions: {
 *             series: {
 *                 cursor: 'pointer',
 *                 point: {
 *                     events: {
 *                         click: function(evt) {
 *
 *                             // Click a menu based on the clicked map region
 *                             var popup = Ext.create("Ext.menu.Menu", {
 *                                 // Selected country name and code
 *                                 title: this.name + " (" + this.code + ")",
 *                                 items: [{
 *                                 text: 'Set Value',
 *                                     // 'this' is the clicked Highmaps point object
 *                                     // See Point API for details
 *                                     scope: this, 
 *                                     handler: function() {
 *                                         // Popup a modal dialog box to set the value
 *                                         Ext.create('Demo.view.SetValue', {
 *                                             pointObj: this
 *                                         }).show();
 *                                     }
 *                                 }, {
 *                                     text: 'Cancel',
 *                                     handler: function() {
 *                                         popup.close();
 *                                     }
 *                                 }]
 *                             });
 *
 *                             popup.showAt(evt.x + 5, evt.y + 5);
 *                         }
 *                     }
 *                 }
 *             }
 * Inside the Highmaps event handler, the keyword 'this' refers to the target object.
 * In the above example, it is the [Highmaps Point](http://api.highcharts.com/highmaps#Point) object.
 *
 * # Known Issues:
 * The Highmaps option [allowPointSelect](http://api.highcharts.com/highmaps#plotOptions.series.allowPointSelect) enables users to select a map region and triggers an event. However, if the user selects a single region
 * quickly and repeatedly on the map, occassionally regions are not reverted back to 'unselected' color.
 * To workaround the issue, include the following event code in the chartConfig.
 * 
 *     plotOptions: {
 *         series: {
 *             point: {
 *                 events: {
 *                     unselect: function() {
 *                          this.graphic.attr({ fill: this.color });
 *                     }
 *                 }
 *             }
 *         }
 *     } 
 * 
 */
Ext.define("Chart.ux.Highmaps", {
    extend : 'Chart.ux.Highcharts',
    alias : ['widget.highmaps'],
    mixins: {
         observable: 'Ext.util.Observable'
    },
    basicSerieCls: "Chart.ux.Highcharts.MapSerie",

    defaultSerieType: 'map',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
	    ddDataReady: true
	});

        me.callParent(arguments);
    },

    /***
     * @cfg animation
     * @hide
     */

    /***
     * @cfg lineShift
     * @hide
     */

    /***
     * @cfg refreshOnChange
     * @hide
     */

    /***
     * @cfg updateDelay
     * @hide
     */

    /***
     * @cfg initAnimAfterLoad
     * @hide
     */

    /***
     * @cfg series
     * An array of Highmaps series objects to be processed by the component.
     * Depending on the series, store and fields can be configured along with 
     * Highmap options. See the map series class documentation for details.
     * **Note**: Before the map is created, all the stores load methods are
     * called first.
     * Here is an example of multiple map series:
     *
     *      series: [{
     *          type: "mapline",
     *          name: "Borders",
     *          dataPathField: 'path',
     *          color: "silver",
     *          store: Ext.StoreMgr.get('Borders'),
     *          tooltip: {
     *              pointFormat: "Border"
     *          }
     *      }, {
     *          type: "mappoint",
     *          name: "Cities",
     *          dataNameField: 'name',
     *          marker: {
     *              fillColor: "white",
     *              lineColor: "black",
     *              lineWidth: 2,
     *              radius: 3
     *          },
     *          store: Ext.StoreMgr.get('Cities')
     *      }, {
     *          ....
     */
    series:[],

    /***
     * @cfg drilldown
     * Highmaps drilldown option. To use it with store, store option
     * needs to be specified. The store is expected to return rows 
     * with fields: parentId, id, and path, whereas name, value and
     * color are optional.
     *
     *      [{
     *          parentId: "US.VA",
     *          id: "US.VA.590",
     *          name: "Danville",
     *          path: "M587.3,237.4 L585.6,237.7 L586.2,235.8 Z",
     *          value: 46.31
     *      },{
     *          parentId: "US.VA",
     *          id: "US.VA.600",
     *          name: "Fairfax",
     *          path: "M606.0,194.2 L606.8,193.8 L606.9,194.2 L606.5,194.4 Z",
     *          value: 72.03
     *      },{
     *          .....
     *      }]
     * 
     * For using alternate field names, users can supply options:
     * parentIdField, idField, pathField, nameField, valueField and
     * colorField. The value in parentId field must match the drilldown field
     * from the originating series store
     */
    drilldown: null,

    /***
     * @private
     * a list of handlers binded relate to this highmaps
     * So before this highmaps is destroyed, we unregister the handlers
     */
    handlers: [],

    /***
     * @private addSeries
     * Add one or more series to the chart. The addSeries method can be used with Serie field name configurations referring to fields from the store
     * or static data using the data field as the native Highcharts series configuration
     *     // Append a series with specific data
     *     addSeries([{
     *         name: 'Series A',
     *         data: [ [ 3, 5 ], [ 4, 6 ], [ 5, 7 ] ]
     *     }], true);
     *
     * @param {Array} series An array of series configuration objects
     * @param {Boolean} append Append the series if true, otherwise replace all the existing chart series. Optional parameter, Defaults to true if not specified
     */
    addSeries : function(series, append) {

        append = (append === null || append === true) ? true : false;

	console.log("Map addSeries - append " + append);

	var HC = Chart.ux.Highcharts;
        // Sencha Touch uses config to access properties
        var _this = (HC.sencha.product == 't') ? this.config : this;

	// c is an array of series in object configuration
	// n is an array of instantiated XXXSerie objects

        var n = new Array(), c = new Array(), cls, serieObject;
        // Add empty data to the serie or just leave it normal. Bug in HighCharts?
        for(var i = 0; i < series.length; i++) {
            // Clone Serie config for scope injection
            var serie = Ext.clone(series[i]);
            if(!serie.serieCls) {
                if(serie.type != null || _this.defaultSerieType != null) {
                    cls = serie.type || (_this.chartConfig.chart && _this.chartConfig.chart.type) || 
                         _this.defaultSerieType;
                    cls = "highcharts." + cls;  // See alternateClassName
                } else {
                    cls = _this.basicSerieCls;
                }

		this.log("Map addSeries: create class " + cls);

                serieObject = Ext.create(cls, serie);
            } else {
                serieObject = serie;
            }

            serieObject.chart = this;

            c.push(serieObject.config);
            n.push(serieObject);
        }

        // Show in chart
        if(this.chart) {
            if(!append) {
                this.removeAllSeries();
                _this.series = n;
                _this.chartConfig.series = c;
            } else {
                _this.chartConfig.series = _this.chartConfig.series ? _this.chartConfig.series.concat(c) : c;
                _this.series = _this.series ? _this.series.concat(n) : n;
            }

	    _this.log("Add series into Highmaps");
            for(var i = 0; i < c.length; i++) {
		c[i].addSeriesAfterLoad(this);
            }

            // Set the data in the config.
        } else {

	    // chart is not created yet. We have created a list of
	    // Serie objects in advance. Then when Highmaps is created
	    // we bind this Serie object to the Highmaps
	    _this.series = n;
/*
	    _this.log("Add series into chartConfig");
            if(append) {
		console.log("AFTER");
                _this.chartConfig.series = _this.chartConfig.series ? _this.chartConfig.series.concat(c) : c;
                _this.series = _this.series ? _this.series.concat(n) : n;
            } else {
                _this.chartConfig.series = c;
		console.log("AFTER1");
		console.log(_this.chartConfig.series);
                _this.series = n;
            }
	    console.log("AFTER2");
	    console.log(_this.chartConfig.series);
*/
        }
    },

    draw : function() {

        // Sencha Touch uses config to access properties
	var HC = Chart.ux.Highcharts;
        var _this = (HC.sencha.product == 't') ? this.config : this;

	Ext.each(_this.series, function(s) {
	    s.addSeriesAfterLoad(this);
	}, this);

	// If drilldown is specified with a store, then also
	// call the async load
	var dd = _this.drilldown;

	if (dd && dd.store) {
	    _this.ddDataReady = false;
	    dd.store.load({
		scope: _this,
		callback: function(records) {
		    // Initiate the getData method
		    (!dd.parentIdField) && (dd.parentIdField = 'parentId');
		    (!dd.idField) && (dd.idField = 'id');
		    (!dd.pathField) && (dd.pathField = 'path');
		    (!dd.valueField) && (dd.valueField = 'value');
		    (!dd.nameField) && (dd.nameField = 'name');

		    (!dd.getData) && (dd.getData = function(record) {
			return {
			    parentId: record.data[dd.parentIdField],
			    id: record.data[dd.idField],
			    path: record.data[dd.pathField],
			    value: record.data[dd.valueField],
			    name: record.data[dd.nameField]
			};
		    });

		    // Now we need to categorise the drilldown data
		    // into groups with parent id in Highmaps config
		    var groups = {};
		    this.ddData = []; 
		    Ext.each(records, function(rec) {
			var data = dd.getData(rec);
			(!groups[data.parentId]) && (groups[data.parentId] = []);
			groups[data.parentId].push(data);
		    });

		    Ext.Object.each(groups, function(key, value) {
			this.ddData.push({ id: key, data: value });
		    }, this);

		    this.ddDataReady = true;
		    this.drawMapWhenReady();
		}
	    });
	}
    },

    /***
     * @private
     * This method is called by each series store load method and
     * the drilldown store to inspect whether all the data have
     * arrived. If so, the proceed creating Highmaps config and
     * render it
     */
    drawMapWhenReady: function() {

	this.log("Call drawMapWhenReady");
        // Sencha Touch uses config to access properties
	var HC = Chart.ux.Highcharts;
        var _this = (HC.sencha.product == 't') ? this.config : this;
	var readyToDraw = true;

	Ext.each(_this.series, function(s) {
	    if (!s.dataReady) {
		readyToDraw = false;
		return false;
	    }
	});

	console.log(readyToDraw + " -- " + _this.ddDataReady);
	if (!readyToDraw || !_this.ddDataReady) {
	    return false;
	}

        this.log("call MAP draw - no. of series: " + _this.series.length);

	// We need to clone the chartConfig because after the Highcharts.Map
	// chart, it will change the data inside and we don't want that
	var config = Ext.apply({}, _this.chartConfig);

	!config.series && (config.series = []);
	Ext.each(_this.series, function(s) {
	    config.series.push(s.createMapSeries());
	});

	// Construct the drilldown data if specified
	var drilldown = null;
	if (_this.drilldown) {
	    drilldown = Ext.applyIf({ store: null,
				      series: _this.ddData },
				    _this.drilldown);
	}
	drilldown && (config.drilldown = drilldown);

	this.log(config.series);
	this.log(config);

        if (this.chart && this.rendered) {
            if (this.resizable) {

		this.unregisterHandlers();

                // Redraw the highchart means recreate the highchart
                // inside this component
                // Destroy
                this.chart.destroy();
                delete this.chart;

                // Create a new chart
		this.log(_this.chartConfig);
		this.log("after Highcharts.Map (1)");
                this.chart = new Highcharts.Map(config, this.afterChartRendered);

		this.fireEvent('mapReady', this);
            }

        } else if (this.rendered) {
            // Create the chart from fresh
	    this.log("call Highcharts.Map (2)");
	    console.log(_this.chartConfig);
            this.chart = new Highcharts.Map(config, this.afterChartRendered);
	    this.fireEvent('mapReady', this);
        }
    },

    // private
    onLoad : function() {

    },

    /***
     * @method bindStore
     * @hide
     * No store concept in the parent level
     */

    registerHandler: function(hConf) {
	this.handlers.push(hConf);
    },

    unregisterHandlers: function() {
	Ext.each(this.handlers, function(hConf) {
	    Ext.destroy(hConf.handler);
	});
    },

    afterRender : function() {

	this.log("Map afterRender");

        // Sencha Touch uses config to access properties
	var HC = Chart.ux.Highcharts;
        var _this = (HC.sencha.product == 't') ? this.config : this;

         if(this.store)
             this.bindStore(this.store, true);

        this.bindComponent(true);

        // Ext.applyIf causes problem in 4.1.x but works fine with
        // 4.0.x
	(!_this.chartConfig.chart) && (_this.chartConfig.chart = {});
        Ext.apply(_this.chartConfig.chart, {
            renderTo : (HC.sencha.product == 't') ? this.element.dom : this.el.dom
        });

        if(_this.series) {
            this.log("Call addSeries");
            this.addSeries(_this.series, false);
        } else
            _this.series = [];

        this.initEvents();
        // Make a delayed call to update the chart.

	// This resize event will be triggered and call the draw method
        // this.draw();
    },

    /***
     * @method refresh
     * @hide
     */
    refresh : function() {
		
    },

    /***
     * @method refreshRow
     * @hide
     */

    /***
     * @method removeAllSeries
     * @hide
     */

    /***
     * @method removeSerie
     * @hide
     */

    /***
     * @method update
     * @hide
     */

    destroy : function() {
	this.unregisterHandlers();
        this.callParent(arguments);
    },

    constructor: function (config) {
         this.mixins.observable.constructor.call(this, config);

         this.addEvents(
	     /**
              * @event mapReady
              * Fires when all load events from the stores are finished
	      * and ready to render the map
	      */
	     'mapReady'
         );

	this.callParent(arguments);
    }

});
