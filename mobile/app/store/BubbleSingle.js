Ext.define('Highcharts.store.BubbleSingle', {
    extend : 'Ext.data.Store',
    autoLoad : false,
    config: {
        proxy : { 
            type: 'ajax',
            url: './data/bubblesingle.json',
            reader : {
                type: 'json',
                rootProperty: 'rows'
            }
        }
    }
});

