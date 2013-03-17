<?php
session_start();
$generateAllData = false; 
if (!isset($_SESSION['noRecord'])) {
  $generateAllData = true;
} 

if ($generateAllData) {
  for ($i = 0; $i < 20; $i++) {
    $tm = 1327600670 + (3600 * $i) * 1000;
    $today = rand(15, 25);
    $yesterday = rand(20, 30);
    $_SESSION['today'][] = $today;
    $_SESSION['yesterday'][] = $yesterday;
    $_SESSION['time'][] = $tm;
    $result['rows'][] = array( 'time' => $tm, 'yesterday' => $yesterday, 'today' => $today);
  }
  $_SESSION['loadCount'] = 1;
  $_SESSION['noRecord'] = $result;

} else {

  $_SESSION['loadCount']++;
  array_shift($_SESSION['time']);
  array_shift($_SESSION['today']);
  array_shift($_SESSION['yesterday']);

  $lastTime = $_SESSION['time'][18];
  $today = rand(15, 25);
  $yesterday = rand(20, 30);
  $_SESSION['today'][] = $today;
  $_SESSION['yesterday'][] = $yesterday;
  $_SESSION['time'][] = $lastTime + 3600000;

  if ($_SESSION['loadCount'] % 2 == 0) {
    for ($i = 0; $i < 20; $i++) {
      $result['rows'][] = array( 'time' => $_SESSION['time'][$i], 'today' => $_SESSION['today'][$i]);
    }
  } else {
    for ($i = 0; $i < 20; $i++) {
      $result['rows'][] = array( 'time' => $_SESSION['time'][$i], 'today' => $_SESSION['today'][$i], 'yesterday' => $_SESSION['yesterday'][$i]);
    }
  }
  $_SESSION['noRecord'] = $result;
}

$result['success'] = true;
  
echo json_encode($result);
?>

