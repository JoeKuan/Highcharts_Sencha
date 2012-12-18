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

if(!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(elt /*, from*/) {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if(from < 0)
      from += len;

    for(; from < len; from++) {
      if( from in this && this[from] === elt)
        return from;
    }
    return -1;
  };

}

Ext.define("Chart.ux.Highcharts", {
  extend : 'Ext.Component',
  alias : ['widget.highchart'],

  statics: {
    version: '2.2.3'
  },

  debug: false,

  debugOn : function() {
      this.debug = true;
  },

  sencha: function() {
      if (Ext.versions.extjs) {
         return {
             product: 'e',
             major: Ext.versions.extjs.major,
             name: 'e' + Ext.versions.extjs.major
         };
      }
      if (Ext.versions.touch) {
         return {
             product: 't',
             major: Ext.versions.touch.major,
             name: 't' + Ext.versions.touch.major
         };
      }
      return {
          product: null,
          major: null,
          name: null
      };

  }(),

  log: function(msg) {
      (typeof console !== 'undefined' && this.debug) && console.log(msg);
  },
 
  /**
   * @cfg {Object} defaultSerieType
   * Sets styles for this chart. This contains default styling, so modifying this
   * property will <b>override</b>
   * the built in styles of the chart. Use {@link #extraStyle} to add
   * customizations to the default styling.
   */
  defaultSerieType : null,

  /**
   * @cfg {Boolean} resizable
   * True to allow resizing, false to disable resizing (defaults to true).
   */
  resizable : true,

  /**
   * @cfg {Integer} updateDelay
   * (defaults to 0)
   */
  updateDelay : 0,

  /**
   * @cfg {Object} loadMask An {@link Ext.LoadMask} config or true to mask the
   * chart while
   * loading. Defaults to false.
   */
  loadMask : false,

  /**
   * @cfg {Boolean} refreshOnChange 
   * chart refresh data when store datachanged event is triggered,
   * i.e. records are added, removed, or updated.
   * If your application is just purely showing data from store load, 
   * then you don't need this, make sure refreshOnLoad is true.
   * (default: false)
   */
  refreshOnChange: false,

  refreshOnLoad: true,

  /**
   * @cfg {Boolean}
   * this config enable or disable chart init animation even Highcharts 
   * chart.animation is true. If set to true, then the extension will
   * try to build chart configuration with store series data.
   * The initial animation is only on display:
   *    1. store data is already loaded
   *    2. chart.animation is not manually set to false
   * (default: false) 
   */
  animation: true,
  initAnim: true,
  updateAnim: true,

  /** 
   * The line shift is achieved by comparing the existing x values in the chart
   * and x values from the store record and work out the extra record.
   * Then append the new records with shift. Hence, any old records with updated
   * y values are ignored
   * updateAnim: true
   */
  lineShift: false,

  /**
   * @cfg {Boolean}
   * This option will defer initially chart create until the store is loaded
   * This option must be used with initAnim: true
   * (default: true)
   */
  initAnimAfterLoad: true,

  /**
   * @cfg {Function} afterChartRendered - callback for after the Highcharts
   * is rendered. 
   * afterChartRendered: function (Highcharts chart) 
   */
  afterChartRendered: null,

  constructor: function(config) {
    config.listeners && (this.afterChartRendered = config.listeners.afterChartRendered);
    this.afterChartRendered && (this.afterChartRendered = Ext.bind(this.afterChartRendered, this));
    if (config.animation == false) {
        this.animation = false;
        this.initAnim = false;
        this.updateAnim = false; 
        this.initAnimAfterLoad = false;
    }

    // Important: Sencha Touch needs this
    (this.sencha.product == 't') && this.on('painted', this.afterRender);

    this.callParent(arguments);
  },

  initComponent : function() {
    if(this.store) {
      this.store = Ext.data.StoreManager.lookup(this.store);
    }
    if (this.animation == false) {
        this.initAnim = false;
        this.updateAnim = false; 
        this.initAnimAfterLoad = false;
    }

    this.callParent(arguments);
  },

  /**
   * Add one or more series to the chart
   * @param {Array} series An array of series
   * @param {Boolean} append the serie. Defaults to true
   */
  addSeries : function(series, append) {
    append = (append === null || append === true) ? true : false;

    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    var n = new Array(), c = new Array(), cls, serieObject;
    // Add empty data to the serie or just leave it normal. Bug in HighCharts?
    for(var i = 0; i < series.length; i++) {
      var serie = series[i];
      if(!serie.serieCls) {
        if(serie.type != null || this.defaultSerieType != null) {
          cls = serie.type || this.defaultSerieType;
          cls = "highcharts." + cls;  // See alternateClassName
        } else {
          cls = "Chart.ux.Highcharts.Serie";
        }
				serieObject = Ext.create(cls, serie);
      } else {
        serieObject = serie;
      }
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
      for(var i = 0; i < c.length; i++) {
        this.chart.addSeries(c[i], true);
      }
      this.refresh();

      // Set the data in the config.
    } else {

      if(append) {
        _this.chartConfig.series = _this.chartConfig.series ? _this.chartConfig.series.concat(c) : c;
        _this.series = _this.series ? _this.series.concat(n) : n;
      } else {
        _this.chartConfig.series = c;
        _this.series = n;
      }
    }
  },

  /**
   *
   */
  removeSerie : function(id, redraw) {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    redraw = redraw || true;
    if(this.chart) {
      this.chart.series[id].remove(redraw);
      _this.chartConfig.series.splice(id, 1);
    }
    _this.series.splice(id, 1);
  },

  /**
   * Remove all series
   */
  removeAllSeries : function() {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;
    var sc = _this.series.length;
    for(var i = 0; i < sc; i++) {
      this.removeSerie(0);
    }
      // Need to also clean up the previous categories data if
      // there are any
      Ext.each(_this.chartConfig.xAxis, function(xAxis) {
          delete xAxis.categories;
      });
  },

  /**
   * Set the title of the chart
   * @param {String} title Text to set the subtitle
   */
  setTitle : function(title) {

    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    if(_this.chartConfig.title)
       _this.chartConfig.title.text = title;
    else
      _this.chartConfig.title = {
        text : title
      };
    if(this.chart && this.chart.container)
      this.draw();
  },

  /**
   * Set the subtitle of the chart
   * @param {String} title Text to set the subtitle
   */
  setSubTitle : function(title) {

    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    if(_this.chartConfig.subtitle)
       _this.chartConfig.subtitle.text = title;
    else
       _this.chartConfig.subtitle = {
        text : title
      };
    if(this.chart && this.chart.container)
      this.draw();
  },

  initEvents : function() {
    if(this.loadMask) {
      this.loadMask = new Ext.LoadMask(this.el, Ext.apply({
        store : this.store
      }, this.loadMask));
    }
  },

  afterRender : function() {

    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    if(this.store)
      this.bindStore(this.store, true);

    this.bindComponent(true);

    // Ext.applyIf causes problem in 4.1.x but works fine with
    // 4.0.x
    Ext.apply(_this.chartConfig.chart, {
      renderTo : (this.sencha.product == 't') ? this.element.dom : this.el.dom
    });

    Ext.applyIf(_this.chartConfig, {
      xAxis : [{}]
    });

    if(_this.xField && this.store) {
      this.updatexAxisData();
    }

    if(_this.series) {
      this.addSeries(_this.series, false);
    } else
      _this.series = [];

    this.initEvents();
    // Make a delayed call to update the chart.
    this.update(0);
  },

  onMove : function() {

  },

  /***
   *  Build the initial data set if there are data already
   *  inside the store.
   */
  buildInitData : function() {

    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

     if (!this.store || this.store.isLoading() || !_this.chartConfig || this.initAnim === false ||
         _this.chartConfig.chart.animation === false) {
         return;
     }

     var data = new Array(), seriesCount = _this.series.length, i;

     var items = this.store.data.items;
     (_this.chartConfig.series === undefined) && (_this.chartConfig.series = []);
     for( i = 0; i < seriesCount; i++) {

         if (!_this.chartConfig.series[i])
            _this.chartConfig.series[i] = { data: [] };
         else 
            _this.chartConfig.series[i].data = [];

         // Sort out the type for this series
         var seriesType = _this.series[i].type || _this.chartConfig.chart.type || _this.chartConfig.chart.defaultSeriesType || 'line';
         var data = _this.chartConfig.series[i].data = _this.chartConfig.series[i].data || {};

         switch(seriesType) {
             case 'line':
             case 'spline':
             case 'area':
             case 'areaspline':
             case 'scatter':
             case 'bar':
             case 'column':
             var yField = _this.series[i].yField || _this.series[i].dataIndex;
             var colorField = _this.series[i].colorField;

                 // Check whether series itself has its own xField defined,
                 // If so, then expect this is a numeric field.
                 if (_this.series[i].xField) {
                    var xField = _this.series[i].xField;
                    for (var x = 0; x < items.length; x++) {
                        var record = items[x];
                        
                        // Determine whether the colorField is 'auto', numerical value,
                        // or field name
                        var color = null;
                        colorField && (color = _this.series[i].resolveColor(colorField, record, x));
                        if (color)
                            data.push({ x: record.data[xField], y: record.data[yField], color: color });
                        else
                            data.push([ record.data[xField], record.data[yField] ]);
                    } 
                     
                 // This make sure the series has no manual data, rely on store record
                 } else if (_this.series[i].yField || _this.series[i].dataIndex) {
                    for (var x = 0; x < items.length; x++) {
                        var record = items[x];
                        // Determine whether the colorField is 'auto', numerical value,
                        // or field name
                        var color = null;
                        colorField && (color = _this.series[i].resolveColor(colorField, record, x));
                        if (color)
                            data.push({ y: record.data[yField], color: color });
                        else
                            data.push(record.data[yField]);
                    }
        
                    var xAxis = (Ext.isArray(_this.chartConfig.xAxis)) ? _this.chartConfig.xAxis[0] : _this.chartConfig.xAxis;
                    // Build the first x-axis categories
                    if (_this.xField && (!xAxis.categories || xAxis.categories.length < items.length)) {
                        xAxis.categories = xAxis.categories || [];
                        for (var x = 0; x < items.length; x++) {
                             xAxis.categories.push(items[x].data[_this.xField]);
                        }
                    }
                }
                break;
             case 'pie':
                  // Summed up the category among the series data
                  var categorieField = _this.series[i].categorieField;
                  var dataField = _this.series[i].dataField;
                  var colorField = _this.series[i].colorField;

                  if(_this.series[i].totalDataField) {
                    var found = null;
                    var totData = {};
                    for (var x = 0; x < items.length; x++) {
                      var record = items[x];
                      var categoryName = record.data[categorieField];
                      // See whether this category name is already define in totData
                      totData[categoryName] = totData[categoryName] || { total: 0 };
                      totData[categoryName].total += record.data[dataField];
                      colorField && (totData[categoryName].color = record.data[colorField]);
                    }

                    for (var y in totData) {
                      var ptObject = { 
                          name: y,
                          y: totData[y].total
                      };
                      totData[y].color && (ptObject.color = totData[y].color);
                      data.push(ptObject);
                    }
                } else {
                    for (var x = 0; x < items.length; x++) {
                      var record = items[x];
                      var ptObject = { 
                          name: record.data[categorieField],
                          y: record.data[dataField]
                      };
                      colorField && (ptObject.color = record.data[colorField]);
                      data.push(ptObject);
                    }
                }
                break;
             case 'columnrange':
             case 'arearange':
             case 'areasplinerange':
                var xField = _this.series[i].xField;
                if (Ext.isArray(_this.series[i].dataIndex)) {
                    var f1 = _this.series[i].dataIndex[0],
                        f2 = _this.series[i].dataIndex[1];

                    for (var x = 0; x < items.length; x++) {
                        var record = items[x];
                        var y1 = record.data[f1], y2 = record.data[f2];
                        if (xField) {
                           if (y1 > y2)
                              data.push([ record.data[xField], y2, y1 ]);
                           else
                              data.push([ record.data[xField], y1, y2 ]);
                        } else {
                           if (y1 > y2)
                              data.push([ y2, y1 ]);
                           else
                              data.push([ y1, y2 ]);
                        }
                    }
                } else if (_this.series[i].minDataIndex && _this.series[i].maxDataIndex) {
                    var f1 = _this.series[i].minDataIndex, 
                        f2 = _this.series[i].maxDataIndex;

                    for (var x = 0; x < items.length; x++) {
                        var record = items[x];
                        var y1 = record.data[f1], y2 = record.data[f2];
                        if (xField) {
                           data.push([ record.data[xField], y1, y2 ]);
                        } else {
                           data.push([ y1, y2 ]);
                        }
                    }
                }
                var xAxis = (Ext.isArray(_this.chartConfig.xAxis)) ? _this.chartConfig.xAxis[0] : _this.chartConfig.xAxis;
                // Build the first x-axis categories
                if (_this.xField && !xField && (!xAxis.categories || xAxis.categories.length < items.length)) {
                    xAxis.categories = xAxis.categories || [];
                    for (var x = 0; x < items.length; x++) {
                         xAxis.categories.push(items[x].data[_this.xField]);
                    }
                } 
                break;
         }

     }
  },

  draw : function() {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    /**
     * Redraw the chart
     */
    this.log("call draw");
    if(this.chart && this.rendered) {
      if(this.resizable) {
        for(var i = 0; i < _this.series.length; i++) {
          _this.series[i].visible = this.chart.series[i].visible;
        }

        // Redraw the highchart means recreate the highchart
        // inside this component
        // Destroy
        this.chart.destroy();
        delete this.chart;

        this.buildInitData();

        // Create a new chart
        this.chart = new Highcharts.Chart(_this.chartConfig, this.afterChartRendered);
      }

      /**
       * Create the chart
       */
    } else if(this.rendered) {
      // Create the chart from fresh

      if (!this.initAnimAfterLoad) {
          this.buildInitData();
          this.chart = new Highcharts.Chart(_this.chartConfig, this.afterChartRendered);
          this.log("initAnimAfterLoad is off, creating chart from fresh");
      } else {
          this.log("initAnimAfterLoad is on, defer creating chart");
          return;
      }
    }

    for( i = 0; i < _this.series.length; i++) {
      if(!_this.series[i].visible)
        this.chart.series[i].hide();
    }

    // Refresh the data only if it is not loading
    // no point doing this, as onLoad will pick it up
    if (!this.store.isLoading()) {
        this.log("Call refresh from draw"); 
        this.refresh();
    }
  },

  //@deprecated
  onContainerResize : function() {
    this.draw();
  },

  //private
  updatexAxisData : function() {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    var data = [], items = this.store.data.items;

    if(_this.xField && this.store) {
      for(var i = 0; i < items.length; i++) {
        data.push(items[i].data[_this.xField]);
      }
      if(this.chart)
        this.chart.xAxis[0].setCategories(data, true);
      else if (Ext.isArray(_this.chartConfig.xAxis)) {
        _this.chartConfig.xAxis[0].categories = data;
      } else {
        _this.chartConfig.xAxis.categories = data;
      } 
    }
  },

  bindComponent : function(bind) {
    /**
     * Make the chart update the positions
     * positions are based on the window object and not on the
     * owner object.
     */
    var getWindow = function(parent) {
      if(parent.ownerCt)
        return getWindow(parent.ownerCt);
      else
        return parent;
    };

    var w = getWindow(this);

    if(bind) {
      w.on('move', this.onMove, this);
      w.on('resize', this.onResize, this);

      if(this.ownerCt)
        this.ownerCt.on('render', this.update, this);
    } else {
      if(this.ownerCt)
        this.ownerCt.un('render', this.update, this);
      w.un('move', this.onMove, this);
    }
  },

  /**
   * Changes the data store bound to this chart and refreshes it.
   * @param {Store} store The store to bind to this chart
   */
  bindStore : function(store, initial) {

    if(!initial && this.store) {
      if(store !== this.store && this.store.autoDestroy) {
        this.store.destroy();
      } else {
        this.store.un("datachanged", this.onDataChange, this);
        this.store.un("load", this.onLoad, this);
        this.store.un("add", this.onAdd, this);
        this.store.un("remove", this.onRemove, this);
        this.store.un("update", this.onUpdate, this);
        this.store.un("clear", this.onClear, this);
      }
    }

    if(store) {
      store = Ext.StoreMgr.lookup(store);
      store.on({
        scope : this,
        load : this.onLoad,
        datachanged : this.onDataChange,
        add : this.onAdd,
        remove : this.onRemove,
        update : this.onUpdate,
        clear : this.onClear
      });
    }

    this.store = store;
    if(store && !initial) {
      this.refresh();
    }
  },

  /**
   * Complete refresh of the chart
   */
  refresh : function() {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    this.log("Call refresh ");
    if(this.store && this.chart) {

      var data = new Array(), seriesCount = _this.series.length, i;

      for( i = 0; i < seriesCount; i++)
          data.push(new Array());

      // We only want to go true the data once.
      // So we need to have all columns that we use in line.
      // But we need to create a point.
      var items = this.store.data.items;
      var xFieldData = [];

      for(var x = 0; x < items.length; x++) {
        var record = items[x];

        if(_this.xField) {
          xFieldData.push(record.data[_this.xField]);
        }

        for( i = 0; i < seriesCount; i++) {
          var serie = _this.series[i], point;
          // if serie.config.getData is defined, it doesn't need
          // reference to dataIndex or yField, it just direct access
          // to fields inside the implementation
          if (serie.dataIndex || serie.yField || serie.minDataIndex || serie.config.getData) {
              point = serie.getData(record, x);
              data[i].push(point);
          } else if (serie.type == 'pie') {
              if (serie.useTotals) {
                  if(x == 0)
                     serie.clear();
                  point = serie.getData(record, x);
              } else if (serie.totalDataField) {
                  serie.getData(record, data[i]);
              } else {
                  point = serie.getData(record, x);
                  data[i].push(point);
              }
          } else if (serie.type == 'gauge') {
              // Gauge is a dial type chart, so the data can only
              // have one value
              data[i][0] = serie.getData(record, x); 
          } else if (serie.data && serie.data.length) {
              // This means the series is added within its own data
              // not from the store
              if (serie.data[x] !== undefined) {
                  data[i].push(serie.data[x]);
              } else {
                  data[i].push(null);
              }
          }
        }
      }

      // Update the series
      if (!this.updateAnim) {
          for( i = 0; i < seriesCount; i++) {
            if(_this.series[i].useTotals) {
              this.chart.series[i].setData(_this.series[i].getTotals());
            } else if(data[i].length > 0) {
              this.chart.series[i].setData(data[i], i == (seriesCount - 1));
              // true == redraw.
            }
          }
    
          if(_this.xField) {
            //this.updatexAxisData();
            this.chart.xAxis[0].setCategories(xFieldData, true);
          }
      } else {
          var xCatStartIdx = -1;
          this.log("Update animation with line shift: " + _this.lineShift);
          for( i = 0; i < seriesCount; i++) {
            if (_this.series[i].useTotals) {
               this.chart.series[i].setData(_this.series[i].getTotals());
            } else if (data[i].length > 0) {
               if (!_this.lineShift) {
                   // Need to work out the length between the store dataset and
                   // the current series data set
                   var chartSeriesLength = this.chart.series[i].points.length;
                   var storeSeriesLength = items.length;
                   for (var x = 0; x < Math.min(chartSeriesLength, storeSeriesLength); x++) {
                        this.chart.series[i].points[x].update(data[i][x], false, true);
                   }

                   // Gotcha, we need to be careful with pie series, as the totalDataField
                   // can conflict with the following series data points trimming operations
                   if (_this.series[i].type == 'pie')
                       continue;

                   // Append the rest of the points from store to chart
                   this.log("chartSeriesLength " + chartSeriesLength + ", storeSeriesLength " + storeSeriesLength);
                   if (chartSeriesLength < storeSeriesLength) {
                      for (var y = 0; y < (storeSeriesLength - chartSeriesLength); y++, x++) {
                          // If data[i][x] is a numeric point, that means x-axis is categorie axis
                          // with string labels. We need to make sure the data points are appended
                          // in the right order
                          if (Ext.isNumeric(data[i][x])) {
                              this.chart.series[i].addPoint([x, data[i][x]], false, false, true);
                          } else {
                              this.chart.series[i].addPoint(data[i][x], false, false, true);
                          }
                      }
                   }
                   // Remove the excessive points from the chart
                   else if (chartSeriesLength > storeSeriesLength) {
                      for (var y = 0; y < (chartSeriesLength - storeSeriesLength); y++) {
                          // Points.length is not immediately updated after remove call, so don't use points.length
                          var last = chartSeriesLength - y - 1;
                          this.log("Remove point at pos " + last);
                          this.chart.series[i].points[last].remove(false, true);
                      }
                   }
               } else {
                   var xAxis = Ext.isArray(this.chart.xAxis) ? this.chart.xAxis[0] : this.chart.xAxis;
                   // We need to see whether compare through xAxis categories or data points x axis value
                   var startIdx = -1; 

                   if (xAxis.categories) {
                      // Since this is categories, it means multiple series share the common
                      // categories. Hence we only do it once to find the startIdx position
                      if (i == 0) {
                          for (var x = 0 ; x < xFieldData.length; x++) {
                              var found = false;
                              for (var y = 0; y < xAxis.categories.length; y++) {
                                  if (xFieldData[x] == xAxis.categories[y]) {
                                     found = true
                                     break;
                                  }
                              }
                              if (!found) {
                                 xCatStartIdx = startIdx = x;
                                 break;
                              } 
                          }

                          var categories = xAxis.categories.slice(0);
                          categories.push(xFieldData[x]);
                          xAxis.setCategories(categories, false);
                      } else {
                          // Reset the startIdx
                          startIdx = xCatStartIdx;
                      }
                      this.log("startIdx " + startIdx);
                      // Start shifting
                      if (startIdx !== -1 && startIdx < xFieldData.length) {
                         for (var x = startIdx; x < xFieldData.length; x++) {

                             this.chart.series[i].addPoint(data[i][x],
                                                           false, true, true);
                         }
                      }
                   } else { 
                      var chartSeries = this.chart.series[i].points;
                      for (var x = 0 ; x < data[i].length; x++) {
                          var found = false;
                          for (var y = 0; y < chartSeries.length; y++) {
                              if (data[i][x][0] == chartSeries[y].x) {
                                 found = true
                                 break;
                              }
                          }
                          if (!found) {
                             startIdx = x;
                             break;
                          } 
                      }
                      this.log("startIdx " + startIdx);
                      // Start shifting
                      if (startIdx !== -1 && startIdx < data[i].length) {
                         for (var x = startIdx; x < data[i].length; x++) {
                             this.chart.series[i].addPoint(data[i][x], false, true, true);
                         }
                      }

                   }
               }
            }
          }

          // For Line Shift it has to be setCategories before addPoint
          if(_this.xField && !_this.lineShift) {
            //this.updatexAxisData();
            this.chart.xAxis[0].setCategories(xFieldData, false);
          }

          this.chart.redraw();
      }
    }
  },

  /**
   * Update a selected row.
   */
  refreshRow : function(record) {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    var index = this.store.indexOf(record);
    if(this.chart) {
      for(var i = 0; i < this.chart.series.length; i++) {
        var serie = this.chart.series[i];
        var point = _this.series[i].getData(record, index);
        if(_this.series[i].type == 'pie' && _this.series[i].useTotals) {
          _this.series[i].update(record);
          this.chart.series[i].setData(_this.series[i].getTotals());
        } else
          serie.data[index].update(point);
      }

      if(_this.xField) {
        this.updatexAxisData();
      }
    }
  },

  /**
   * A function to delay the updates
   * @param {Integer} delay Set a custom delay
   */
  update : function(delay) {
    var cdelay = delay || this.updateDelay;
    if(!this.updateTask) {
      this.updateTask = new Ext.util.DelayedTask(this.draw, this);
    }
    this.updateTask.delay(cdelay);
  },

  // private
  onDataChange : function() {
    this.refreshOnChange && (this.refresh() && this.log("onDataChange"));
  },

  // private
  onClear : function() {
     // In Sencha Touch, load method issue clear event
     // this will call refresh twice which removes the
     // animation effect
     if (this.sencha.product == 't' && this.store && !this.store.isLoading()) {
         this.refresh();
     }
  },

  // private
  onUpdate : function(ds, record) {
    this.refreshRow(record);
  },

  // private
  onAdd : function(ds, records, index) {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    var redraw = false, xFieldData = [];

    for(var i = 0; i < records.length; i++) {
      var record = records[i];
      if(i == records.length - 1)
        redraw = true;
      if(_this.xField) {
        xFieldData.push(record.data[_this.xField]);
      }

      for(var x = 0; x < this.chart.series.length; x++) {
        var serie = this.chart.series[x], s = _this.series[x];
        var point = s.getData(record, index + i);
        if(!(s.type == 'pie' && s.useTotals)) {
          serie.addPoint(point, redraw);
        }
      }
    }
    if(_this.xField) {
      this.chart.xAxis[0].setCategories(xFieldData, true);
    }

  },

  //private
  onResize : function() {
    this.callParent(arguments);
    this.update();
  },

  // private
  onRemove : function(ds, record, index, isUpdate) {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    for(var i = 0; i < _this.series.length; i++) {
      var s = _this.series[i];
      if(s.type == 'pie' && s.useTotals) {
        s.removeData(record, index);
        this.chart.series[i].setData(s.getTotals());
      } else {
        this.chart.series[i].data[index].remove(true);
      }
    }
    Ext.each(this.chart.series, function(serie) {
      serie.data[index].remove(true);
    });

    if(_this.xField) {
      this.updatexAxisData();
    }
  },

  // private
  onLoad : function() {

    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    if (!this.chart && this.initAnimAfterLoad) {
     this.log("Call refresh from onLoad for initAnim");
        this.buildInitData();
        this.chart = new Highcharts.Chart(_this.chartConfig, this.afterChartRendered);
        return;
    } 

    this.log("Call refresh from onLoad");
    this.refreshOnLoad && this.refresh();
  },

  destroy : function() {
    // Sencha Touch uses config to access properties
    var _this = (this.sencha.product == 't') ? this.config : this;

    delete _this.series;
    if(this.chart) {
      this.chart.destroy();
      delete this.chart;
    }

    this.bindStore(null);
    this.bindComponent(null);

    this.callParent(arguments);
  }

});