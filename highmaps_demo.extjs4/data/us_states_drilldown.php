<?php
$data = json_decode(file_get_contents("./us_states.json"), true);
$drilldown = json_decode(file_get_contents("./us_states_drilldown.json"), true);

foreach ($data['rows'] as &$row) {
  $row['drilldown'] = $row['id'];
  $row['value'] = rand(1, 10000) / 100;
}

// Flatten into dd series data into 'parentId', 'id', 'value', 'path'
foreach ($drilldown['rows'] as $dd) {
  foreach ($dd['data'] as &$d) {
    $d['value'] = rand(1, 10000) / 100;
    $ddData[] = array('parentId' => $dd['id'], 'id' => $d['id'],
                      'name' => $d['name'],
               	    'path' => $d['path'], 'value' => $d['value']);
  }
}

file_put_contents("./us_states_1.json", json_encode($data));

$result['success'] = true;
$result['rows'] = $ddData;
file_put_contents("./us_states_drilldown_1.json", json_encode($result));
?>
