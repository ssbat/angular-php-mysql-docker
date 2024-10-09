<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'config/database.php';

$product_id=$_POST["product_id"];
$client_id=$_POST["client_id"];


$SQL="INSERT INTO `orders` (`time`, `product_id`, `client_id`) VALUES (NULL, $product_id, $client_id);";
if($con->query($SQL)){
   echo json_encode(array("result"=>"Success"));
}
else{
    echo json_encode(array("result"=>"Failed"));

}


?>
