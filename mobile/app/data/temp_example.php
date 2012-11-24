<?php
  if ( !function_exists('json_encode') ){
    function json_encode($content){
      require_once 'JSON.php';
      $json = new Services_JSON;
      return $json->encodeUnsafe($content);
    }
  }

  define("NULL_RATIO", 5);

  session_start();
  $generateAllData = false; 
  // Check whether for the same demo
  // Rename to touchdemo - so it won't have data corruption
  // simultaneously with extjs demo
  if ($_SESSION['touchdemo'] == $_POST['touchdemo']) {
     $sessionData = 'temperature';
     if ($_POST['random'] == 1) {
         $sessionData = 'nullTemperature';
     }
     if (!isset($_SESSION[$sessionData])) {
        $generateAllData = true;
     } 
  } else {
     $generateAllData = true;
  }

  if ($generateAllData) {
    for ($i = 0; $i < 20; $i++) {
      $tm = 1327600670 + (3600 * $i);
      if ($_POST['numeric'] == 1) {
        $result['rows'][] = array( 'time' => $tm * 1000, 'yesterday' => rand(20,30), 'today' => rand(15, 25));
      } else {
        $result['rows'][] = array( 'time' => '' + $tm * 1000, 'yesterday' => rand(20,30), 'today' => rand(15, 25));
      }
    }
    // If random is supplied, then randomly set null to the temperature
    if (intval($_POST['random']) == 1) {
       for ($i = 0; $i < 20; $i++) {
         // Make the data point null
         if (rand(0, NULL_RATIO) == NULL_RATIO) {
             $result['rows'][$i]['yesterday'] = null;
         }
         if (rand(0, NULL_RATIO) == NULL_RATIO) {
             $result['rows'][$i]['today'] = null;
         }
       }
    }
     
    $_SESSION[$sessionData] = $result;
  } else {
    $result = $_SESSION[$sessionData];
    array_shift($result['rows']);
    $lastTime = intval($result['rows'][18]['time']);
      if ($_POST['numeric'] == 1) {
         $result['rows'][] = array( 'time' => $lastTime + 3600000, 'yesterday' => rand(20,30), 'today' => rand(15, 25));
      } else {
         $result['rows'][] = array( 'time' => '' + ($lastTime + 3600000), 'yesterday' => rand(20,30), 'today' => rand(15, 25));
      }
    // If random is supplied, then randomly set null to the temperature
    if (intval($_POST['random']) == 1) {
         // Make 1/4 of the data point is null
         if (rand(0, NULL_RATIO) == NULL_RATIO) {
             $result['rows'][19]['yesterday'] = null;
         }
         if (rand(0, NULL_RATIO) == NULL_RATIO) {
             $result['rows'][19]['today'] = null;
         }
    }
    $_SESSION[$sessionData] = $result;
  }
  $_SESSION['touchdemo'] = $_POST['touchdemo'];

  $result['success'] = true;
  
    // Return result in summary format
  if (intval($_POST['summary']) == 1) {
    $result['rows'] = array();
    $result['rows'][] = array('time' => 'Today', 'temperature' => rand(15, 20));
    $result['rows'][] = array('time' => 'Yesterday', 'temperature' => rand(25, 30));
    $result['rows'][] = array('time' => '2 days ago', 'temperature' => rand(30, 35));
  }
  
  echo json_encode($result);
?>

