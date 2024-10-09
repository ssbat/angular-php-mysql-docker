<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'config/database.php';


$id=$_POST["id"];
$sql="SELECT client.name,client.email,laptops.*,orders.* FROM client LEFT JOIN orders ON orders.client_id=client.id LEFT JOIN laptops ON laptops.ID=orders.product_id WHERE client.id=$id";;


$stmt=$con->query($sql);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;


?>