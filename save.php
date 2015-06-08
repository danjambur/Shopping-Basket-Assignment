<?php
    $name = "basket-".date('jS-M-Y_H:i:s')."-".uniqid().".txt";
    $data = json_decode(file_get_contents("php://input"), true);
    echo "<h3>Saving data:</h3>";
    $data = print_r($data, true);
    $myfile = fopen($name, "w") or die("Unable to open file!");
    fwrite($myfile, $data);
    fclose($myfile);
?>