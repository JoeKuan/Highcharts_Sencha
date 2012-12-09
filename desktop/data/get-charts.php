<?php
$result[] = array('text' => 'Spline - Animation (Points update)', 'id' => 'charts/spline', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - No animation (Override getData template method)', 'id' => 'charts/splineNoAnim', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Line Shift (Category x-axis)', 'id' => 'charts/splineCatShift', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Line Shift (Numeric x-axis)', 'id' => 'charts/splineNumShift', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - ExtJs Popup Menu', 'id' => 'charts/splinePopup', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Add Series (non store data)', 'id' => 'charts/splineAddSeries', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Null data', 'id' => 'charts/splineNullData', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - afterChartRendered callback', 'id' => 'charts/splineAfterRenderedCallback', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - No initial animation', 'id' => 'charts/splineNoInitAnim', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Column', 'id' => 'charts/column', 'leaf' => true, 'icon' => '../images/columnchart.png');
$result[] = array('text' => 'Column - drill down', 'id' => 'charts/columnDrillDown', 'leaf' => true, 'icon' => '../images/columnchart.png');
$result[] = array('text' => 'Pie', 'id' => 'charts/pie', 'leaf' => true, 'icon' => '../images/piechart.png');
$result[] = array('text' => 'Scatter', 'id' => 'charts/scatter', 'leaf' => true, 'icon' => '../images/scatter.png');
$result[] = array('text' => 'Donut (Pie)', 'id' => 'charts/donut', 'leaf' => true, 'icon' => '../images/ring.png' );
$result[] = array('text' => 'Gauge/Dial', 'id' => 'charts/gauge', 'leaf' => true, 'icon' => '../images/gauge.png' );
$result[] = array('text' => 'Area Range (unsorted fields)', 'id' => 'charts/arearange_unsorted', 'leaf' => true, 'icon' => '../images/color-adjustment.png' );
$result[] = array('text' => 'Area Spline Range (pre-sorted fields)', 'id' => 'charts/arearange_sorted', 'leaf' => true, 'icon' => '../images/color-adjustment-red.png');
$result[] = array('text' => 'Columns Range', 'id' => 'charts/columnrange', 'leaf' => true, 'icon' => '../images/color-adjustment-green.png' );
$result[] = array('text' => 'Polar/Radar', 'id' => 'charts/polar', 'leaf' => true, 'icon' => '../images/radar.png' );
$result[] = array('text' => 'Star', 'id' => 'charts/star', 'leaf' => true, 'icon' => '../images/asterisk.png' );

/*
$result[] = array('text' => 'Testing', 'id' => 'testing', 'leaf' => false, 
     'children' => array(
           array('text' => 'refreshOnChange (enabled)', 'id' => 'tests/refreshOnChange_On', 'leaf' => true,
                 'description' => 'Changing the data editor should trigger refresh'),
           array('text' => 'refreshOnChange (disabled)', 'id' => 'tests/refreshOnChange_Off','leaf' => true,
                 'description' => 'Changing the data editor should NOT trigger refresh'),
           array('text' => 'refreshOnLoad (enabled)', 'id' => 'tests/refreshOnLoad_On', 'leaf' => true,
                 'description' => 'Reloading the store should trigger refresh'),
           array('text' => 'refreshOnLoad (disabled)', 'id' => 'tests/refreshOnLoad_Off','leaf' => true,
                 'description' => 'Reloading the store should NOT trigger refresh'),
           array('text' => 'ignoreInitAnim (enabled)', 'id' => 'tests/ignoreInitAnim_Off','leaf' => true,
                 'description' => "Highcharts init animation on and shouldn't show initial animation"),
           array('text' => '4000 data pts', 'id' => 'tests/4000pts','leaf' => true,
                 'description' => "Should be able to plot 4000 data points"),
           array('text' => 'afterChartRender', 'id' => 'tests/afterChartRender','leaf' => true,
                 'description' => "Dialog box access chart rendered object"),

      )    
);
*/
echo json_encode($result);
?>
