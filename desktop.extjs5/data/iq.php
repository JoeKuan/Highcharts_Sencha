<?php
session_start();

if (!isset($_SESSION['seriesSize'])) {
  $_SESSION['seriesSize'] = 0;
  $result['rows'] = array();
} else {
  $result['rows'] = $_SESSION['rows'];
}

if ($_SESSION['seriesSize'] % 5 == 0) {
  $_SESSION['seriesSize'] = 0;
  $result['rows'] = array();
}

$names = array('David', 'Nora', 'Steve', 'Mark', 'Nick');

$_SESSION['seriesSize']++;
for ($i = $_SESSION['seriesSize'] - 1; $i < $_SESSION['seriesSize']; $i++) {
  $iQ = rand(70, 130);
  $result['rows'][] = array('name' => $names[$i], 'iq' => $iQ);
}
$_SESSION['rows'] = $result['rows'];

$result['success'] = true;

echo json_encode($result);
?>
