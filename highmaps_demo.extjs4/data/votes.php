<?php
$lines = file("./votes.csv");

foreach($lines as $ln) {
  $fields = explode(",", trim($ln));
  $rows[] = array('code' => $fields[0], 'name' => $fields[1], 'obama' => floatval($fields[3]), 
                  'mccain' => floatval($fields[4]), 'percent' => floatval($fields[10]));
}

$result['success'] = true;
$result['rows'] = $rows;

echo json_encode($result);
?>
