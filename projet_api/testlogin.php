<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json");
// include database connection
include 'config/database.php';
 
// delete message prompt will be here
 
// select all data
$query = "SELECT * FROM users ";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>
