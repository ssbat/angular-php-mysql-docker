<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// include database connection
include 'config/database.php';

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Prepare the query using a parameterized statement
$query = "INSERT INTO client (id,name, email, password) VALUES (NULL,:name, :email, :password)";
$stmt = $con->prepare($query);

// Bind the parameters
$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);

if ($stmt->execute()) {

    echo json_encode(array('result'=>'success'));
}
else{
    echo json_encode(array('result'=>'Failed'));
}
?>
