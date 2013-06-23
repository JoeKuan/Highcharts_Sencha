<?php
$splitCharts = array(
               // To add another level, so that we can have a back button back to the spline list
               array('text' => 'Animation', 'shortDesc' => 'Points update', 'children' => array(), 'id' => 'spline'),
               array('text' => 'No Animation', 'shortDesc' => '', 'children' => array(), 'id' => 'splineNoAnim'),
               array('text' => 'Line Shift', 'shortDesc' => 'Category x-axis', 'children' => array(), 'id' => 'splineCatShift'),
               array('text' => 'Line Shift', 'shortDesc' => 'Numeric x-axis', 'children' => array(), 'id' => 'splineNumShift'),
               array('text' => 'Add Series', 'shortDesc' => 'Non Store Data', 'children' => array(), 'id' => 'splineAddSeries'),
               array('text' => 'Graph Click Menus', 'shortDesc' => '', 'children' => array(), 'id' => 'splinePopup'),
               array('text' => 'Null Data', 'shortDesc' => '', 'children' => array(), 'id' => 'splineNullData')
          );

$pieCharts = array(
               array('text' => 'Pie', 'shortDesc' => 'Single series', 'children' => array(), 'id' => 'pie'),
               array('text' => 'Donut Pie', 'shortDesc' => 'Two series', 'children' => array(), 'id' => 'donut'),
);

$rangeCharts = array(
               array('text' => 'Area Range Chart', 'shortDesc' => 'Spline - Sorted fields', 'children' => array(), 'id' => 'arearange_sorted'),
               array('text' => 'Area Range Chart', 'shortDesc' => 'Line - Unsorted fields', 'children' => array(), 'id' => 'arearange_unsorted'),
               array('text' => 'Column Range Chart', 'shortDesc' => '', 'children' => array(), 'id' => 'columnrange')
);

$result = array('success' => true, 'children' => array(
     array('icon' => './images/linechart.png', 'text' => 'Spline Examples', 'leaf' => false, 'children' => $splitCharts),
     array('icon' => './images/columnchart.png', 'text' => 'Column (Embedded Data)', 'leaf' => true, 'id' => 'columnEmbedData'),
     array('icon' => './images/columnchart.png', 'text' => 'Column', 'leaf' => true, 'id' => 'column'),
     array('icon' => './images/scatter.png', 'text' => 'Scatter', 'leaf' => true, 'id' => 'scatter'),
     array('icon' => './images/pie.png', 'text' => 'Pie Charts', 'children' => $pieCharts),
     array('icon' => './images/donut.png', 'text' => 'Polar/Radar Chart', 'leaf' => true, 'id' => 'polar'),
     array('icon' => './images/donut.png', 'text' => 'Star Chart', 'leaf' => true, 'id' => 'star'),
     array('icon' => './images/donut.png', 'text' => 'Range Charts','children' => $rangeCharts),
     array('icon' => './images/donut.png', 'text' => 'Gauge/Dial Chart', 'id' => 'gauge', 'leaf' => true),
     array('icon' => '', 'text' => 'Bubble Chart', 'id' => 'bubble', 'leaf' => true)
  )
);
/*
$result[] = array('text' => 'Column', 'id' => 'charts/column', 'leaf' => true, 'icon' => './images/columnchart.png');
$result[] = array('text' => 'Pie', 'id' => 'charts/pie', 'leaf' => true, 'icon' => './images/piechart.png');
$result[] = array('text' => 'Scatter', 'id' => 'charts/scatter', 'leaf' => true, 'icon' => './images/scatter.png');
$result[] = array('text' => 'Donut (Pie)', 'id' => 'charts/donut', 'leaf' => true, 'icon' => './images/ring.png' );
$result[] = array('text' => 'Gauge/Dial', 'id' => 'charts/gauge', 'leaf' => true, 'icon' => './images/gauge.png' );
$result[] = array('text' => 'Area Range (unsorted fields)', 'id' => 'charts/arearange_unsorted', 'leaf' => true, 'icon' => './images/color-adjustment.png' );
$result[] = array('text' => 'Area Spline Range (pre-sorted fields)', 'id' => 'charts/arearange_sorted', 'leaf' => true, 'icon' => './images/color-adjustment-red.png');
$result[] = array('text' => 'Columns Range', 'id' => 'charts/columnrange', 'leaf' => true, 'icon' => './images/color-adjustment-green.png' );
$result[] = array('text' => 'Polar/Radar', 'id' => 'charts/polar', 'leaf' => true, 'icon' => './images/radar.png' );
$result[] = array('text' => 'Star', 'id' => 'charts/star', 'leaf' => true, 'icon' => './images/asterisk.png' );
*/
echo json_encode($result);
?>
