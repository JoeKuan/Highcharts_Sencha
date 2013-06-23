Ext.define('Highcharts.store.EmbeddedData', {
    extend : 'Ext.data.Store',
    autoLoad : false,
    config: {
        model: 'Highcharts.model.EmbeddedData',
        data:[{ 
            'category':'trans',
            'x':50,
            'y':14.8,
            'z':14.8
        }, {
            'category':'transit',
            'x':50,
            'y':14.8,
            'z':14.8
        }, {
            'category':'cue',
            'x':50,
            'y':14.8,
            'z':14.8
        }]
    }
});
