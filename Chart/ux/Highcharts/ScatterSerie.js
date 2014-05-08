/**
 * Serie class for scatter type series
 *
 * See {@link Chart.ux.Highcharts.Serie} class for more info
 */
Ext.define('Chart.ux.Highcharts.ScatterSerie', {
    extend : 'Chart.ux.Highcharts.Serie',
    alternateClassName: [ 'highcharts.scatter' ],
    type : 'scatter',

    /**
     * @cfg {String} zField
     * The field used to access the z-axis value (3D scatter)
     * source. Store's record
     */
    zField : null

});
