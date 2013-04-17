<?php
$result[] = array('text' => 'Spline', 'id' => 'charts/spline', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Line Shift (Numeric x-axis)', 'id' => 'charts/splineNumShift', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Null data', 'id' => 'charts/splineNullData', 'leaf' => true, 'icon' => '../images/linechart.png');
$result[] = array('text' => 'Spline - Irregular data', 'id' => 'charts/splineIrregular', 'leaf' => true, 'icon' => '../images/linechart.png');
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
$result[] = array('text' => 'Bubble (Single Series)', 'id' => 'charts/bubblesingle', 'leaf' => true, 'icon' => '../images/bubble.png' );
$result[] = array('text' => 'Bubble (Multiple Series)', 'id' => 'charts/bubblemulti', 'leaf' => true, 'icon' => '../images/bubble.png' );
$result[] = array('text' => 'Error Bar', 'id' => 'charts/error', 'leaf' => true, 'icon' => '../images/errorbar.png' );
$result[] = array('text' => 'Box Plot', 'id' => 'charts/boxplot', 'leaf' => true, 'icon' => '../images/boxplot.png' );
$result[] = array('text' => 'Waterfall', 'id' => 'charts/waterfall', 'leaf' => true, 'icon' => '../images/waterfall.png' );
$result[] = array('text' => 'Funnel', 'id' => 'charts/funnel', 'leaf' => true, 'icon' => '../images/funnel.png' );

$result[] = array('text' => 'Other Tests', 'id' => 'testing', 'leaf' => false, 'expanded' => true, 
     'children' => array(
           array('text' => 'Spline - afterChartRendered callback', 'id' => 'charts/splineAfterRenderedCallback', 
                 'leaf' => true, 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - No initial animation', 'id' => 'charts/splineNoInitAnim', 'leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - ExtJs Popup Menu', 'id' => 'charts/splinePopup', 'leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - No store binding', 'id' => 'charts/splineNoStore', 'leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - Add Series (non store data)', 'id' => 'charts/splineAddSeries', 'leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - No animation (Override getData template method)', 'id' => 'charts/splineNoAnim', 
                 'leaf' => true, 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - Line Shift (Category x-axis)', 'id' => 'charts/splineCatShift', 'leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Spline - Line Shift (draw hidden series)', 'id' => 'charts/drawHiddenSeries', 'leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Store reload with diff no. of data points', 'id' => 'charts/test1','leaf' => true, 
                 'icon' => '../images/linechart.png'),
           array('text' => 'Fix size chart within the component', 'id' => 'charts/test2','leaf' => true, 
                 'icon' => '../images/piechart.png'),
           array('text' => 'pointclick event listener', 'id' => 'charts/test3','leaf' => true, 
                 'icon' => '../images/piechart.png'),
           array('text' => 'Test updateNoRecord', 'id' => 'charts/test4','leaf' => true, 
                 'icon' => '../images/columnchart.png'),
           array('text' => 'Test loadmask', 'id' => 'charts/test5','leaf' => true, 
                 'icon' => '../images/scatter.png'),
           array('text' => 'Store reload with diff no. of data points', 'id' => 'charts/test6','leaf' => true, 
                 'icon' => '../images/piechart.png')
      )    
);
echo json_encode($result);
?>
