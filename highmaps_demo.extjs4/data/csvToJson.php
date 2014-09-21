<?php

function shiftField(&$line) {

  for ($i = 0, $j = 0; $i < strlen($line); $i++) {
    if (!$startQuote) {
      if ($line[$i] == '"') {
	$startQuote = true;
	continue;
      }
    } else if ($line[$i] !== '"') {
      $field .= $line[$i];
    } else {
      $line = substr($line, $i+1);
      return $field;
    }
  }
}

$lines = file($argv[1], FILE_IGNORE_NEW_LINES);
$count = 0;
foreach ($lines as $ln) {

  $cname = shiftField($ln);
  $ccode = shiftField($ln);
  $dummy = shiftField($ln);
  $dummy = shiftField($ln);

  $fields = explode(",", $ln);
  foreach($fields as &$f) {
    $f = trim($f, '"');
  }

  if ($count == 0) {
    $years = $fields;
  } else {
    $result[$ccode]['name'] = $cname;
    for ($i = 0; $i < count($years); $i++) {
      if (is_numeric($fields[$i])) {
	$y = intval($years[$i]);
	$v = floatval($fields[$i]);
	$result[$ccode]['population'][] = array($y, $v);
	// $result[$ccode]['population'][] = $v;
      }
    }

    $latest_year['success'] = true;
    $latest_year['rows'][] = array('code3' => $ccode, 
				    'value' => $v,
				    'year' => $y,
				    'name' => $cname
				   );
  }

  $count++;
}

file_put_contents("population_history_latest.json", json_encode($latest_year));
file_put_contents("population_history.json", json_encode($result));

?>