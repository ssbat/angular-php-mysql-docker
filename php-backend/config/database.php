<?php
// used to connect to the database
$host = "mysql";
$db_name = "we4b_projet";
$username = "root";
$password = "";
  
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
  
// show error
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}
?>
