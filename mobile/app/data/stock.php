<?php

// Get from now to 30 days ago
$symbol = 'aapl';
$now = time();
$toDate = localtime($now, true);
$toDate['tm_year'] += 1900;
$fromDate = localtime($now - (86400 * 30), true);
$fromDate['tm_year'] += 1900;
$dateParams = "a={$fromDate['tm_mon']}&b={$fromDate['tm_mday']}&c={$fromDate['tm_year']}" .
              "&d={$toDate['tm_mon']}&e={$toDate['tm_mday']}&f={$toDate['tm_year']}";
$result = file_get_contents("http://ichart.finance.yahoo.com/table.csv?s={$symbol}&{$dateParams}&g=d");

// Parse the result into dates and close value
$lines = explode("\n", $result);

// Remove the header row
array_shift($lines);

// Yahoo seems to return the latest day twice
array_shift($lines);

$stockResult['rows'] = array();
foreach((array) $lines as $ln) {
   if (!strlen(trim($ln))) {
     continue;
   }
   list($date, $o, $h, $l, $c, $v, $ac) = explode(",", $ln, 7);
   // Need to prepend because the yahoo results are in descending order
   array_unshift($stockResult['rows'], array('date' => $date, 'close' => floatval($c), 'open' => floatval($o), 'high' => floatval($h), 'low' => floatval($l)));    
}

echo json_encode($stockResult);
?>
