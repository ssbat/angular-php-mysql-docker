<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json");
// include database connection
include 'config/database.php';
 

// foreach($_POST as $header=>$value){
//     echo $header;
// }

$email=$_POST["email"];
$password=$_POST["password"];


$sql="SELECT * FROM users WHERE `email`='$email' AND `password`='$password'";
// echo $sql;
if($con->query($sql)->rowCount()>0){
    echo json_encode(array('result'=>'success'));
}
else{
    echo json_encode(array('result'=>'failed'));
}














?>