<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if($_POST){

// include database connection
include 'config/database.php';

try{

// insert query
$query = "INSERT INTO laptops VALUES (NULL,:br,:pr,:sc,:pc,:ram,:gpu,:stg,:photo)";
// prepare query for execution
$stmt = $con->prepare($query);
// posted values
$brand = $_POST['brand'];
$price = $_POST['price'];
$screen = $_POST['screen'];
$processor = $_POST['processor'];
$ram = $_POST['ram'];
$gpu = $_POST['gpu'];
$storage = $_POST['storage'];
$photo = $_POST['photo'];





// $lastname = $_POST['last_name'];
// $price = $_POST['price'];
// bind the parameters
$stmt->bindParam(':br', $brand);
$stmt->bindParam(':pr', $price);
$stmt->bindParam(':sc', $screen);
$stmt->bindParam(':pc', $processor);
$stmt->bindParam(':ram', $ram);
$stmt->bindParam(':gpu', $gpu);
$stmt->bindParam(':stg', $storage);
// $stmt->bindParam(':stg', $storage);
$stmt->bindParam(':photo', $photo);


// Execute the query
if($stmt->execute()){
    echo json_encode(array('result'=>'success'));
}else{
    echo json_encode(array('result'=>'fail'));
}
}
// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}
?>
