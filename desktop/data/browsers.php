<?php
if (isset($_POST['total'])) {
    // Column top level
    $rows[] = array('vendor' => 'MSIE', 'usage' => 54.07, 'color' => '#2f7ed8');
    $rows[] = array('vendor' => 'Firefox', 'usage' => 21.16, 'color' => '#0d233a');
    $rows[] = array('vendor' => 'Chrome', 'usage' => 11.74, 'color' => '#8bbc21');
    $rows[] = array('vendor' => 'Safari', 'usage' => 6.94, 'color' => '#910000');
    $rows[] = array('vendor' => 'Opera', 'usage' => 2.14, 'color' => '#1aadce');
} else if (isset($_POST['browser'])) {
    // Column drill down level
  switch($_POST['browser']) {
  case 'MSIE':
    $rows[] = array('version' => 'MSIE 6.0', 'vendor' => 'MSIE', 'usage' => 10.85, 'color' => '#2f7ed8');
    $rows[] = array('version' => 'MSIE 7.0', 'vendor' => 'MSIE', 'usage' => 7.35, 'color' => '#2f7ed8');
    $rows[] = array('version' => 'MSIE 8.0', 'vendor' => 'MSIE', 'usage' => 33.06, 'color' => '#2f7ed8');
    $rows[] = array('version' => 'MSIE 9.0', 'vendor' => 'MSIE', 'usage' => 2.81, 'color' => '#2f7ed8');
    break;
  case 'Firefox':
    $rows[] = array('version' => 'Firefox 2.0', 'vendor' => 'Firefox', 'usage' => 0.20, 'color' => '#0d233a');
    $rows[] = array('version' => 'Firefox 3.0', 'vendor' => 'Firefox', 'usage' => 0.83, 'color' => '#0d233a');
    $rows[] = array('version' => 'Firefox 3.5', 'vendor' => 'Firefox', 'usage' => 1.58, 'color' => '#0d233a');
    $rows[] = array('version' => 'Firefox 3.6', 'vendor' => 'Firefox', 'usage' => 13.12, 'color' => '#0d233a');
    $rows[] = array('version' => 'Firefox 4.0', 'vendor' => 'Firefox', 'usage' => 5.43, 'color' => '#0d233a');
    break;
  case 'Chrome':
    $rows[] = array('version' => 'Chrome 5.0', 'vendor' => 'Chrome', 'usage' => 0.12, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 6.0', 'vendor' => 'Chrome', 'usage' => 0.19, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 7.0', 'vendor' => 'Chrome', 'usage' => 0.12, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 8.0', 'vendor' => 'Chrome', 'usage' => 0.36, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 9.0', 'vendor' => 'Chrome', 'usage' => 0.32, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 10.0', 'vendor' => 'Chrome', 'usage' => 9.91, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 11.0', 'vendor' => 'Chrome', 'usage' => 0.50, 'color' => '#8bbc21');
    $rows[] = array('version' => 'Chrome 12.0', 'vendor' => 'Chrome', 'usage' => 0.22, 'color' => '#8bbc21');
    break;
  case 'Safari':
    $rows[] = array('version' => 'Safari 5.0', 'vendor' => 'Safari', 'usage' => 4.55, 'color' => '#910000');
    $rows[] = array('version' => 'Safari 4.0', 'vendor' => 'Safari', 'usage' => 1.42, 'color' => '#910000');
    $rows[] = array('version' => 'Safari Win 5.0', 'vendor' => 'Safari', 'usage' => 0.23, 'color' => '#910000');
    $rows[] = array('version' => 'Safari 4.1', 'vendor' => 'Safari', 'usage' => 0.21, 'color' => '#910000');
    $rows[] = array('version' => 'Safari/Maxthon', 'vendor' => 'Safari', 'usage' => 0.20, 'color' => '#910000');
    $rows[] = array('version' => 'Safari 3.1', 'vendor' => 'Safari', 'usage' => 0.19, 'color' => '#910000');
    $rows[] = array('version' => 'Safari 4.1', 'vendor' => 'Safari', 'usage' => 0.14, 'color' => '#910000');
    break;
  case 'Opera':
    $rows[] = array('version' => 'Opera 9.x', 'vendor' => 'Opera', 'usage' => 0.12, 'color' => '#1aadce');
    $rows[] = array('version' => 'Opera 10.x', 'vendor' => 'Opera', 'usage' => 0.37, 'color' => '#1aadce');
    $rows[] = array('version' => 'Opera 11.x', 'vendor' => 'Opera', 'usage' => 1.65, 'color' => '#1aadce');
    break;
  }
} else {
    // Used for donut
    $rows[] = array('version' => 'MSIE 6.0', 'vendor' => 'MSIE', 'usage' => 10.85);
    $rows[] = array('version' => 'MSIE 7.0', 'vendor' => 'MSIE', 'usage' => 7.35);
    $rows[] = array('version' => 'MSIE 8.0', 'vendor' => 'MSIE', 'usage' => 33.06);
    $rows[] = array('version' => 'MSIE 9.0', 'vendor' => 'MSIE', 'usage' => 2.81);
    $rows[] = array('version' => 'Firefox 2.0', 'vendor' => 'Firefox', 'usage' => 0.20);
    $rows[] = array('version' => 'Firefox 3.0', 'vendor' => 'Firefox', 'usage' => 0.83);
    $rows[] = array('version' => 'Firefox 3.5', 'vendor' => 'Firefox', 'usage' => 1.58);
    $rows[] = array('version' => 'Firefox 3.6', 'vendor' => 'Firefox', 'usage' => 13.12);
    $rows[] = array('version' => 'Firefox 4.0', 'vendor' => 'Firefox', 'usage' => 5.43);
    $rows[] = array('version' => 'Chrome 5.0', 'vendor' => 'Chrome', 'usage' => 0.12);
    $rows[] = array('version' => 'Chrome 6.0', 'vendor' => 'Chrome', 'usage' => 0.19);
    $rows[] = array('version' => 'Chrome 7.0', 'vendor' => 'Chrome', 'usage' => 0.12);
    $rows[] = array('version' => 'Chrome 8.0', 'vendor' => 'Chrome', 'usage' => 0.36);
    $rows[] = array('version' => 'Chrome 9.0', 'vendor' => 'Chrome', 'usage' => 0.32);
    $rows[] = array('version' => 'Chrome 10.0', 'vendor' => 'Chrome', 'usage' => 9.91);
    $rows[] = array('version' => 'Chrome 11.0', 'vendor' => 'Chrome', 'usage' => 0.50);
    $rows[] = array('version' => 'Chrome 12.0', 'vendor' => 'Chrome', 'usage' => 0.22);
    $rows[] = array('version' => 'Safari 5.0', 'vendor' => 'Safari', 'usage' => 4.55);
    $rows[] = array('version' => 'Safari 4.0', 'vendor' => 'Safari', 'usage' => 1.42);
    $rows[] = array('version' => 'Safari Win 5.0', 'vendor' => 'Safari', 'usage' => 0.23);
    $rows[] = array('version' => 'Safari 4.1', 'vendor' => 'Safari', 'usage' => 0.21);
    $rows[] = array('version' => 'Safari/Maxthon', 'vendor' => 'Safari', 'usage' => 0.20);
    $rows[] = array('version' => 'Safari 3.1', 'vendor' => 'Safari', 'usage' => 0.19);
    $rows[] = array('version' => 'Safari 4.1', 'vendor' => 'Safari', 'usage' => 0.14);
    $rows[] = array('version' => 'Opera 9.x', 'vendor' => 'Opera', 'usage' => 0.12);
    $rows[] = array('version' => 'Opera 10.x', 'vendor' => 'Opera', 'usage' => 0.37);
    $rows[] = array('version' => 'Opera 11.x', 'vendor' => 'Opera', 'usage' => 1.65);
}

$result['rows'] = $rows;
echo json_encode($result);
?>
