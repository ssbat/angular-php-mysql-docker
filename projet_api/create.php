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
$target_dir = "images/"; //image upload folder name
$filename=null;

if(isset(($_FILES["image"])))
{
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        $filename=$_FILES["image"]["name"];

}
    //moving multiple images inside folder
}

$screen = $_POST['screen'];
// $processor = $_POST['processor'];
$ram = $_POST['ram'];
$gpu = $_POST['gpu'];
// $storage = $_POST['storage'];
// $photo = $_POST['photo'];
// $screen ='15';
$processor =$_POST["processor"];
// $ram = '14';
// $gpu = '54334';
$storage =$_POST["storage"];
$photo = $filename;




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
