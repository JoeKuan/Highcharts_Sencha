<?php

function genRandomUsage($time, $free) {

    $gb = 10000000;
    $usage = 100 - $free;
    $lab = rand($usage * 0.1, $usage * 0.5);
    $usage = 100 - ($free + $lab);
    $sales = rand($usage * 0.05, $usage * 0.3);
    $usage = 100 - ($free + $lab + $sales);
    $support = rand($usage * 0.2, $usage * 0.4);
    $logistic = 100 - ($free + $lab + $sales + $support);
   
    return array('time' => $time, 'lab' => $lab * $gb, 'sales' => $sales * $gb, 'support' => $support * $gb, 'logistic' => $logistic * $gb); 
}
    $result['rows'][] = genRandomUsage('8:00 am', 70);
    $result['rows'][] = genRandomUsage('9:00 am', 60);
    $result['rows'][] = genRandomUsage('10:00 am', 50);
    $result['rows'][] = genRandomUsage('11:00 am', 40);
    $result['rows'][] = genRandomUsage('12:00 pm', 30);
    $result['rows'][] = genRandomUsage('1:00 pm', 15);
    $result['rows'][] = genRandomUsage('2:00 pm', 10);
    $result['rows'][] = genRandomUsage('3:00 pm', 23);
    $result['rows'][] = genRandomUsage('4:00 pm', 30);
    $result['rows'][] = genRandomUsage('5:00 pm', 40);
    $result['rows'][] = genRandomUsage('6:00 pm', 66);
    $result['rows'][] = genRandomUsage('7:00 pm', 70);
    $result['rows'][] = genRandomUsage('8:00 pm', 85);
 
    echo json_encode($result);
?>
