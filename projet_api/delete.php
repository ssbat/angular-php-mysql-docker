<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'config/database.php';



$id=NULL;
if(isset($_POST["id"])){

    $id=$_POST["id"];
    // DELETE FROM `users` WHERE `users`.`id` = 5;

    $SQL="DELETE FROM laptops WHERE id=$id";
    if($con->query($SQL)){
        echo json_encode(array('result'=>'success'));
    }
    else{
        echo json_encode(array('result'=>'Failed'));

    }

}















?>