<?php
$result['success'] = true;
for ($i = 0; $i < 10; $i++) {
   $result['rows'][] = array('x' => rand(0, 10), 'y' => rand(0, 10), 'z' => rand(0, 10));
}

echo json_encode($result);
?>
