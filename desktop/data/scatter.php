<?php
$result['success'] = true;
$result['rows'][] = array('rebars_x' => 0, 'rebars_y' => 0, 'points_x' => 40, 'points_y' => 40);
$result['rows'][] = array('rebars_x' => 300, 'rebars_y' => 0, 'points_x' => 260, 'points_y' => 40);
$result['rows'][] = array('rebars_x' => 300, 'rebars_y' => 600, 'points_x' => 260, 'points_y' => 560);
$result['rows'][] = array('rebars_x' => 0, 'rebars_y' => 600, 'points_x' => 40, 'points_y' => 560);
$result['rows'][] = array('rebars_x' => 0, 'rebars_y' => 0);

/***
 *  Add delay if specified
 */
if (is_numeric($_POST['delay'])) {
   sleep(intval($_POST['delay']));
}

echo json_encode($result);
?>
