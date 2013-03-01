<?php
/***
 * Random value between 0 - 1 in 2 decimal places
 */
function random_0_1_float() {
  return (float) number_format((float)rand()/(float)getrandmax(), 2);
}

function sortXAxis($a, $b) {
  if ($a[0] == $b[0]) {
    return 0;
  }
  return ($a[0] < $b[0]) ? -1 : 1;
}

/***
 * Check whether the xAxis value has already been generated
 * If so, regenerate it again
 */
function checkXVal($xVal, $arr) {
    for ($x = 0; $x < $size; $x++) {
      if ($data[$x][0] == $xVal) {
        return true;
      } 
    }

    return false;
}

/***
 * Generate random series
 */
function genRandomSeries($size) {
  $data = array();
  for ($i = 0; $i < $size; $i++) {
    $xVal = rand(0, 5) + random_0_1_float();
    while(checkXVal($xVal, $data)) {
      $xVal = rand(0, 5) + random_0_1_float();
    }
    $data[] = array($xVal, rand(0, 10) + random_0_1_float());
  } 

  // Sort the data points based on xAxis values
  usort($data, 'sortXAxis');

  return $data;
}

/***
 *  Return 3 series - each series range from 5 - 10 number of data points 
 *  The x axis is range from 0 - 5 with decimal values
 *  The y axis is range from 0 - 10 with decimal values
 */ 
$numSeries = 3;
$rows = array();
for ($i = 0; $i < $numSeries; $i++) {
  $row["series" . ($i + 1)] = genRandomSeries(rand(5, 10));
}
$rows[] = $row;
$result['success'] = true;
$result['rows'] = $rows;

echo json_encode($result);
?>
