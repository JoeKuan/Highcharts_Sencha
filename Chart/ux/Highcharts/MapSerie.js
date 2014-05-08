/***
 * MapSerie class is the most basic map series class and it is the default
 * map series type. Other map classes are extended from MapSerie. 
 * All the native Highmaps series options can be specfied in the map series
 * which will be included when the map is rendered.
 *
 * The following is a more advance example with series data and mapData
 * from separate stores and also different index fields.
 *
 *     series : [{
 *
 *         // Following fields are to construct map series data
 *         // field
 *         dataNameField: 'name',
 *         dataValueField: 'value',
 *         store: Ext.StoreMgr.get('PopDensity1'),
 *
 *         // Get the mapData from store instead
 *         mapDataStore: Ext.StoreMgr.get('MapData2'),
 *         mapDataPathField: 'path',
 *
 *         // Both stores have different index field names.
 *         // Use joinBy as an array to link both stores data
 *         // getData method will extract code2 value from 
 *         // MapData2 and getMapData will also get code1 value
 *         // from PopDensity1
 *         joinBy: [ 'code2', 'code1' ],
 *
 *         // other Highmaps options
 *         name: 'Population density',
 *         borderColor: 'black',
 *         borderWidth: 0.2,
 *         states: {
 *             hover: {
 *                 borderWidth: 1
 *             }
 *         },
 *         tooltip: {
 *             valueSuffix: '/km²'
 *         }
 *     }]
 */
Ext.define('Chart.ux.Highcharts.MapSerie', {
    extend : 'Chart.ux.Highcharts.Serie',
    alternateClassName: [ 'highcharts.map' ],
    type : 'map',

    config: {
        /**
	 * @private
         * Refer to the owner - Highmaps component
         */
        map: null
    },

    /**
     * @cfg chart
     * @hide
     */

    /**
     * @cfg {String} dataPathField
     * map path field from the data store. 
     */
    dataPathField: null,

    /**
     * @cfg {String} dataNameField
     * map name field from the data store
     */
    dataNameField: null,

    /**
     * @cfg {String} dataColorField
     * map color field from the data store
     */
    dataColorField: null,

    /**
     * @cfg {String} dataValueField
     * map value field from the data store
     */
    dataValueField: null,

    /**
     * @cfg {String} dataDrilldownField
     * If the map is configured drilldown option, then this is the id field to 
     * associate with the drilldown data
     */
    dataDrilldownField: null,

    /**
     * @cfg {Object} store
     * Store with series data. If a store object is specified,
     * data field options are required to map the data from store.
     * Depending on the application, not all the data fields mappings
     * are required
     */
    store: null,

    /**
     * @cfg {Object} mapDataStore
     * Optional field for users prefer to extract mapData from a store.
     * If this is specified, then users must also map the path field
     * from the store. Below is an example:
     *
     *      series : [{
     *          // US Counties Map with counties region value
     *
     *          // data only with name and value fields
     *          store: Ext.StoreMgr.get('USCountiesData'),
     *          dataNameField: 'name',
     *          dataValueField: 'value',
     *
     *          mapDataPathField: 'path',
     *          mapDataStore : Ext.StoreMgr.get('USCountiesMap'),
     *          // the extension will expect 'name' field from mapDataStore
     *          // because indicated by joinBy field
     *          joinBy: 'name',
     *
     */
    mapDataStore: null,

    /**
     * @cfg {String|Number} mapDataPathField
     * path field for mapData store. If users want to redirect mapData from a store, then
     * this field must be specified.
     */
    mapDataPathField: null,

    dataReady: false,

    /**
     * @private setMap
     * Bind this series onto highmaps and setup store's load event handler if needed
     */
    setMap: function(highmaps) {
        // Now we got the parent highmaps object.
        // We need to bind the load map to reflect any change to the map
        if (this.updateMap && this.store) {
            var handler = this.store.on('load', function(store) {
                console.log("call store load handler to getData()");
                var data = this.getData();
                var highmaps = this.getMap();
                Ext.each(highmaps.chart.series, function(series) {
                    (series.name === this.name) &&
                        highmaps.chart.series.setData(data);
                }, this);
            }, this, { destroyable: true });

            // Record the load handler in the highmaps
            highmaps.registerHandler({
                hObj: this.store,
                eventName: 'load',
                handler: handler
            });
        }

        this.config.map = highmaps;
    },

    /**
     * @method getMapData
     * Returns all the records mapData from store. If mapDataStore and mapDataPathField
     * are defined, this method is called internally once the store is loaded
     *
     * @param {Object} record
     * record containing SVG path data for a map region
     *
     * @return {Array} 
     * returns an array of all the map regions
     * [data object](http://api.highcharts.com/highmaps#series.mapData)
     */
    getMapData: function(record) {
        var data = {};
        this.mapCodeField && (data[this.mapCodeField] = record.data[this.mapCodeField]);
        data['path'] = record.data[this.mapDataPathField];
        return data;
    },

    /**
     * @private
     */
    getMData: function() {
        var store = this.mapDataStore;
        var mapData = [];

        if (this.mapDataStore) {
            store.each(function(record) {
                mapData.push(this.getMapData(record));
            }, this);
        }
        return mapData;
    },

    /** 
     * @method getData
     * getData is the core mechanism for transferring from Store's record data into the map series data.
     * This routine acts as a Template Method for any map series class, i.e. any new series type class must 
     * support this method.
     * 
     * Generally, you don't need to override this method in the config.
     *
     * @param {Object} record
     * record containing map series data
     *
     * @return {Array} 
     * returns an array of map series 
     * [data object](http://api.highcharts.com/highmaps#series.data)
     */
    getData: function(record) {
        var data = {};

        this.dataCodeField && (data[this.dataCodeField] = record.data[this.dataCodeField]);
        this.dataPathField && (data.path = record.data[this.dataPathField]);
        this.dataNameField && (data.name = record.data[this.dataNameField]);
        this.dataColorField && (data.color = record.data[this.dataColorField]);
        this.dataValueField && (data.value = record.data[this.dataValueField]);

        return data;
    },

    /***
     * @method getMapSeriesData
     * Returns the series data from the store(s). This
     * method is called internally when the store(s) is/are loaded.
     * @return {Array} array of record
     */
    getMapSeriesData: function() {

        // getData is called after 
        // 1. Highmaps has assigned the series store from series store or highmaps store.
        // 2. Store is already loaded
        var items = this.store && this.store.data.items;
        var data = [];

        Ext.isArray(items) && console.log("Call getMapSeriesData. Size " + items.length);
        Ext.each(items, function(record, index) {
            data.push(this.getData(record));
        }, this);           

        console.log("Finish getMapSeriesData. Size " + data.length);
        return data;
    },

    /***
     * @method createMapSeries
     * Returns a Highmaps series config with actual data from the store(s). This
     * method is called internally when the store(s) is/are loaded.
     * @return {Object} Highmaps series config
     */
    createMapSeries: function() {

        var seriesOpts = { store: null, mapDataStore: null };

        Ext.applyIf(seriesOpts, this.serie_config);

        // Extract series map data from the store if 
        // 'data' field is not pre-configured
        (!seriesOpts.data) && (seriesOpts.data = this.getMapSeriesData());

        // Extract series name if from series store
        this.nameField && (seriesOpts.name = this.name);

        // Extract series name if from series store
        this.colorField && (seriesOpts.color = this.color);

        // Extract series name if from series store
        this.mapDataStore && (seriesOpts.mapData = this.getMData());

        return seriesOpts;
    },

    /***
     * @method storesLoaded
     * an utility method for checking whether the series store(s) have
     * been loaded
     * @return {Boolean}
     */
    storesLoaded: function() {

        return (this.mdsLoaded && this.mssLoaded);
    },
    
    /**
     * @private
     * Must be called after setMap
     * Used by Highmaps to register it's own map series
     */
    addSeriesAfterLoad: function(highmaps) {

        this.mdsLoaded = true;
        this.mssLoaded = true;

        console.log("MapSerie addSeriesAfterLoad");
        console.log(highmaps);

        var createLoadHandler = function(loadedVar) {
            return function() {
                this[loadedVar] = true;
                if (this.storesLoaded()) {
                    // Mark this series has data ready
                    this.dataReady = true;

                    // Tells the parent to inspect other
                    // series data is ready. If all ready,
                    // then construct the map
                    highmaps.drawMapWhenReady();
                }
            };
        };

        // Call both stores' load 
        // and call addSeries when both load methods
        // have finished
        if (this.mapDataStore) {
            this.mdsLoaded = false;
            console.log("Call mds store load method");
            this.mapDataStore.load({
                scope: this,
                callback: createLoadHandler("mdsLoaded")
            });
        }

        if (this.store) {
            this.mssLoaded = false;
            console.log("Call mss store load method");
            this.store.load({
                scope: this,
                callback: createLoadHandler("mssLoaded")
            });
        } else {
            // Just simply add 
            console.log("No store - simply call highmaps.addSeries");
            this.dataReady = true;
            highmaps.drawMapWhenReady();
        }
    },

    /***
     * @cfg updateNoRecord
     * @hide
     */

    /***
     * @cfg xField
     * @hide
     */

    /***
     * @cfg yField
     * @hide
     */

    /***
     * @cfg colorField
     * @hide
     */

    /***
     * @cfg dataIndex
     * @hide
     */

    /***
     * @event pointclick
     * @hide
     */

    constructor : function(config) {

        // Keeping the original series config separate
        Ext.apply(this, config);
        this.serie_config = config;

        if (Ext.isArray(this.joinBy)) {
            this.dataCodeField = this.joinBy[1];
            this.mapCodeField = this.joinBy[0];
            console.log("mapCodeField: " + this.mapCodeField + ", dataCodeField: " +
                        this.dataCodeField);
        } else {
            this.dataCodeField = this.joinBy;
            this.mapCodeField = this.joinBy;
        }
    }

});
