<?php
      $result['rows'][] = array('browser'=> 'IE', '2011_June' => 23.2, '2012_June' => 16.7);
      $result['rows'][] = array('browser'=> 'Firefox', '2011_June' => 42.2, '2012_June' => 34.4);
      $result['rows'][] = array('browser'=> 'Chrome', '2011_June' => 27.9, '2012_June' => 41.7);
      $result['rows'][] = array('browser'=> 'Safari', '2011_June' => 3.7, '2012_June' => 4.1);
      $result['rows'][] = array('browser'=> 'Opera', '2011_June' => 2.4, '2012_June' => 2.2);

    echo json_encode($result);
?>
