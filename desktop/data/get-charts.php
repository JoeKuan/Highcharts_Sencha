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
$result[] = array('text' => 'Spline - Irregular data', 'id' => 'charts/splineIrregular', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - No store binding', 'id' => 'charts/splineNoStore', 'leaf' => true, 'icon' => '../images/linechart.png');
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

$result[] = array('text' => 'Other Tests', 'id' => 'testing', 'leaf' => false, 'expanded' => true, 
     'children' => array(
           array('text' => 'Store reload with diff no. of data points', 'id' => 'charts/test1','leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Fix size chart within the component', 'id' => 'charts/test2','leaf' => true, 
                 'icon' => '../images/piechart.png'),
           array('text' => 'pointclick event listener', 'id' => 'charts/test3','leaf' => true, 
                 'icon' => '../images/piechart.png')
      )    
);
echo json_encode($result);
?>
