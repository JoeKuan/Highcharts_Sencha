Ext.data.JsonP.Chart_ux_Highcharts_PyramidSerie({"tagname":"class","name":"Chart.ux.Highcharts.PyramidSerie","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"PyramidSerie.js","href":"PyramidSerie.html#Chart-ux-Highcharts-PyramidSerie"}],"aliases":{},"alternateClassNames":["highcharts.pyramid"],"extends":"Chart.ux.Highcharts.FunnelSerie","mixins":[],"requires":[],"uses":[],"members":[{"name":"colorField","tagname":"cfg","owner":"Chart.ux.Highcharts.Serie","id":"cfg-colorField","meta":{}},{"name":"dataIndex","tagname":"cfg","owner":"Chart.ux.Highcharts.Serie","id":"cfg-dataIndex","meta":{}},{"name":"type","tagname":"cfg","owner":"Chart.ux.Highcharts.PyramidSerie","id":"cfg-type","meta":{}},{"name":"updateNoRecord","tagname":"cfg","owner":"Chart.ux.Highcharts.Serie","id":"cfg-updateNoRecord","meta":{}},{"name":"visible","tagname":"cfg","owner":"Chart.ux.Highcharts.Serie","id":"cfg-visible","meta":{}},{"name":"xField","tagname":"cfg","owner":"Chart.ux.Highcharts.Serie","id":"cfg-xField","meta":{}},{"name":"yField","tagname":"cfg","owner":"Chart.ux.Highcharts.Serie","id":"cfg-yField","meta":{}},{"name":"chart","tagname":"property","owner":"Chart.ux.Highcharts.Serie","id":"property-chart","meta":{"readonly":true}},{"name":"pointObject","tagname":"property","owner":"Chart.ux.Highcharts.Serie","id":"property-pointObject","meta":{"private":true}},{"name":"serieCls","tagname":"property","owner":"Chart.ux.Highcharts.Serie","id":"property-serieCls","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Chart.ux.Highcharts.WaterfallSerie","id":"method-constructor","meta":{}},{"name":"arr_getDataPair","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-arr_getDataPair","meta":{"private":true}},{"name":"arr_getDataSingle","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-arr_getDataSingle","meta":{"private":true}},{"name":"arr_getDataTriplet","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-arr_getDataTriplet","meta":{"private":true}},{"name":"buildInitData","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-buildInitData","meta":{"private":true}},{"name":"clear","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-clear","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-destroy","meta":{"private":true}},{"name":"getData","tagname":"method","owner":"Chart.ux.Highcharts.WaterfallSerie","id":"method-getData","meta":{}},{"name":"obj_getData","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-obj_getData","meta":{"private":true}},{"name":"onPointClick","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-onPointClick","meta":{"private":true}},{"name":"resolveColor","tagname":"method","owner":"Chart.ux.Highcharts.Serie","id":"method-resolveColor","meta":{"private":true}},{"name":"pointclick","tagname":"event","owner":"Chart.ux.Highcharts.Serie","id":"event-pointclick","meta":{}}],"code_type":"ext_define","id":"class-Chart.ux.Highcharts.PyramidSerie","component":false,"superclasses":["Ext.Base","Chart.ux.Highcharts.Serie","Chart.ux.Highcharts.WaterfallSerie","Chart.ux.Highcharts.FunnelSerie"],"subclasses":[],"mixedInto":[],"parentMixins":["Ext.util.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>highcharts.pyramid</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='docClass'>Chart.ux.Highcharts.Serie</a><div class='subclass '><a href='#!/api/Chart.ux.Highcharts.WaterfallSerie' rel='Chart.ux.Highcharts.WaterfallSerie' class='docClass'>Chart.ux.Highcharts.WaterfallSerie</a><div class='subclass '><a href='#!/api/Chart.ux.Highcharts.FunnelSerie' rel='Chart.ux.Highcharts.FunnelSerie' class='docClass'>Chart.ux.Highcharts.FunnelSerie</a><div class='subclass '><strong>Chart.ux.Highcharts.PyramidSerie</strong></div></div></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Files</h4><div class='dependency'><a href='source/PyramidSerie.html#Chart-ux-Highcharts-PyramidSerie' target='_blank'>PyramidSerie.js</a></div></pre><div class='doc-contents'><p>Serie class for pyramid series type</p>\n\n<p>See <a href=\"#!/api/Chart.ux.Highcharts.FunnelSerie\" rel=\"Chart.ux.Highcharts.FunnelSerie\" class=\"docClass\">Chart.ux.Highcharts.FunnelSerie</a> class for more info</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-colorField' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-colorField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-colorField' class='name expandable'>colorField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This field is used for setting data point color\nnumber or color hex in '#([0-9])'. ...</div><div class='long'><p>This field is used for setting data point color\nnumber or color hex in '#([0-9])'. Otherwise, the option\nis treated as a field name and the store should return\nrows with the same color field name. For column type series, if you\nwant Highcharts to automatically color each data point,\nthen you should use <a href=\"http://api.highcharts.com/highcharts#plotOptions.column.colorByPoint\">plotOptions.column.colorByPoint</a> option in the series config</p>\n</div></div></div><div id='cfg-dataIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-dataIndex' class='name expandable'>dataIndex</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>can be either an alias of yField\n(which has higher precedence if both are defined) or mapping to store's field\nwith a...</div><div class='long'><p>can be either an alias of <em>yField</em>\n(which has higher precedence if both are defined) or mapping to store's field\nwith array of data points</p>\n</div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.ux.Highcharts.PyramidSerie'>Chart.ux.Highcharts.PyramidSerie</span><br/><a href='source/PyramidSerie.html#Chart-ux-Highcharts-PyramidSerie-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.PyramidSerie-cfg-type' class='name expandable'>type</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Highcharts series type name. ...</div><div class='long'><p>Highcharts series type name. This field must be specified.</p>\n\n<p>Line, area, scatter and column series are the simplest form of charts\n(includes Polar) which has the simple data mappings: <em>dataIndex</em> or <em>yField</em>\nfor y-axis values and xField for either x-axis category field or data point's\nx-axis coordinate.</p>\n\n<pre><code>series: [{\n   type: 'scatter',\n   xField: 'xValue',\n   yField: 'yValue'\n}]\n</code></pre>\n<p>Defaults to: <code>&#39;pyramid&#39;</code></p><p>Overrides: <a href=\"#!/api/Chart.ux.Highcharts.FunnelSerie-cfg-type\" rel=\"Chart.ux.Highcharts.FunnelSerie-cfg-type\" class=\"docClass\">Chart.ux.Highcharts.FunnelSerie.type</a></p></div></div></div><div id='cfg-updateNoRecord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-updateNoRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-updateNoRecord' class='name expandable'>updateNoRecord</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Setting this option to true will enforce the chart to clear the series if\nthere is no record returned for the series ...</div><div class='long'><p>Setting this option to true will enforce the chart to clear the series if\nthere is no record returned for the series</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-visible' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-visible' class='name expandable'>visible</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The field used to hide the serie initial. ...</div><div class='long'><p>The field used to hide the serie initial. Defaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-xField' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-xField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-xField' class='name expandable'>xField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The field used to access the x-axis value from the items from the data\nsource. ...</div><div class='long'><p>The field used to access the x-axis value from the items from the data\nsource. Store's record</p>\n</div></div></div><div id='cfg-yField' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-yField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-yField' class='name expandable'>yField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The field used to access the y-axis value from the items from the data\nsource. ...</div><div class='long'><p>The field used to access the y-axis value from the items from the data\nsource. Store's record</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-chart' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-property-chart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-property-chart' class='name expandable'>chart</a> : Object/<a href=\"#!/api/Chart.ux.Highcharts\" rel=\"Chart.ux.Highcharts\" class=\"docClass\">Chart.ux.Highcharts</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The Chart.ux.Highcharts chart object owns this serie. ...</div><div class='long'><p>The <a href=\"#!/api/Chart.ux.Highcharts\" rel=\"Chart.ux.Highcharts\" class=\"docClass\">Chart.ux.Highcharts</a> chart object owns this serie.\nThis can be useful with pointclick event when you need to use an Ext.Component.</p>\n\n<pre><code>pointclick:{\n    fn:function(serie,point,record,event){\n    //Get parent window to replace the chart inside (me)\n    var window=this.chart.up('windows');\n    }\n}\n</code></pre>\n\n<p>Setting the scope on the listeners at runtime can cause trouble in Highcharts on\nparsing the listener</p>\n</div></div></div><div id='property-pointObject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-property-pointObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-property-pointObject' class='name expandable'>pointObject</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The default action for series point data is to use array instead of point object\nunless desired to set point particul...</div><div class='long'><p>The default action for series point data is to use array instead of point object\nunless desired to set point particular field. This changes the default behaviour\nof getData template method\nDefault: false</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-serieCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-property-serieCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-property-serieCls' class='name expandable'>serieCls</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.WaterfallSerie' rel='Chart.ux.Highcharts.WaterfallSerie' class='defined-in docClass'>Chart.ux.Highcharts.WaterfallSerie</a><br/><a href='source/WaterfallSerie.html#Chart-ux-Highcharts-WaterfallSerie-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Chart.ux.Highcharts.WaterfallSerie-method-constructor' class='name expandable'>Chart.ux.Highcharts.PyramidSerie</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Chart.ux.Highcharts.WaterfallSerie\" rel=\"Chart.ux.Highcharts.WaterfallSerie\" class=\"docClass\">Chart.ux.Highcharts.WaterfallSerie</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.ux.Highcharts.WaterfallSerie\" rel=\"Chart.ux.Highcharts.WaterfallSerie\" class=\"docClass\">Chart.ux.Highcharts.WaterfallSerie</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Chart.ux.Highcharts.Serie-method-constructor\" rel=\"Chart.ux.Highcharts.Serie-method-constructor\" class=\"docClass\">Chart.ux.Highcharts.Serie.constructor</a></p></div></div></div><div id='method-arr_getDataPair' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-arr_getDataPair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-arr_getDataPair' class='name expandable'>arr_getDataPair</a>( <span class='pre'>record, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>each data point in the series is represented in it's own x and y values ...</div><div class='long'><p>each data point in the series is represented in it's own x and y values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-arr_getDataSingle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-arr_getDataSingle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-arr_getDataSingle' class='name expandable'>arr_getDataSingle</a>( <span class='pre'>record, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>single value data version of getData - Common category, individual y-data ...</div><div class='long'><p>single value data version of getData - Common category, individual y-data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-arr_getDataTriplet' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-arr_getDataTriplet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-arr_getDataTriplet' class='name expandable'>arr_getDataTriplet</a>( <span class='pre'>record, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>each data point in the series is represented in it's own x and y values ...</div><div class='long'><p>each data point in the series is represented in it's own x and y values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-buildInitData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-buildInitData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-buildInitData' class='name expandable'>buildInitData</a>( <span class='pre'>items, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Build the initial data set if there are data already\n inside the store. ...</div><div class='long'><p>Build the initial data set if there are data already\n inside the store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-clear' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.WaterfallSerie' rel='Chart.ux.Highcharts.WaterfallSerie' class='defined-in docClass'>Chart.ux.Highcharts.WaterfallSerie</a><br/><a href='source/WaterfallSerie.html#Chart-ux-Highcharts-WaterfallSerie-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.WaterfallSerie-method-getData' class='name expandable'>getData</a>( <span class='pre'>record, index</span> ) : Object|Array|Number<span class=\"signature\"></span></div><div class='description'><div class='short'>getData is the core mechanism for transferring from Store's record data into the series data array. ...</div><div class='long'><p>getData is the core mechanism for transferring from Store's record data into the series data array.\nThis routine acts as a Template Method for any series class, i.e. any new series type class must\nsupport this method.</p>\n\n<p>Generally, you don't need to override this method in the config because this method is internally\ncreated once the serie class is instantiated. Depending on whether <em>xField</em>, <em>yField</em> and\n<em>colorField</em> are defined, the class constructor creates a <em>getData</em> method which either returns a single value,\ntuple array or a data point object. This is done for performance reason. See Highcharts API document\n<a href=\"http://api.highcharts.com/highcharts#Series.addPoint()\">Series.addPoint</a> for more details.</p>\n\n<p>If your data model requires specific data processing in the record data, then you may need to\noverride this method. The return for the method must confine to the <a href=\"http://api.highcharts.com/highcharts#Series.addPoint()\">Series.addPoint</a>\nprototype. Note that if this method is manually defined, there is no need to define field name options\nbecause this can be specified inside the implementation anyway</p>\n\n<pre><code>series: [{\n    type: 'spline',\n    // Return avg y values\n    getData: function(record) {\n        return (record.data.y1 + record.data.y2) / 2;\n    }\n}],\nxField: 'time',\n....\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|Array|Number</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Chart.ux.Highcharts.Serie-method-getData\" rel=\"Chart.ux.Highcharts.Serie-method-getData\" class=\"docClass\">Chart.ux.Highcharts.Serie.getData</a></p></div></div></div><div id='method-obj_getData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-obj_getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-obj_getData' class='name expandable'>obj_getData</a>( <span class='pre'>record, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>object style of getData ...</div><div class='long'><p>object style of getData</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onPointClick' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-onPointClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-onPointClick' class='name expandable'>onPointClick</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Chart.ux.Highcharts.Serie-event-pointclick\" rel=\"Chart.ux.Highcharts.Serie-event-pointclick\" class=\"docClass\">pointclick</a></li></ul></div></div></div><div id='method-resolveColor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-resolveColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-resolveColor' class='name expandable'>resolveColor</a>( <span class='pre'>colorField, record, dataPtIdx</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Resolve color based on the value of colorField ...</div><div class='long'><p>Resolve color based on the value of colorField</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colorField</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>dataPtIdx</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-pointclick' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-event-pointclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-event-pointclick' class='name expandable'>pointclick</a>( <span class='pre'>serie, point, record, evt, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the point of the serie is clicked. ...</div><div class='long'><p>Fires when the point of the serie is clicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serie</span> : <a href=\"#!/api/Chart.ux.Highcharts.Serie\" rel=\"Chart.ux.Highcharts.Serie\" class=\"docClass\">Chart.ux.Highcharts.Serie</a><div class='sub-desc'><p>the serie where is fired</p>\n</div></li><li><span class='pre'>point</span> : Object<div class='sub-desc'><p>the point clicked</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>the record associated to the point</p>\n</div></li><li><span class='pre'>evt</span> : Object<div class='sub-desc'><p>the event param</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});