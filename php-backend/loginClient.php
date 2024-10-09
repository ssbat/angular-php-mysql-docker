<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json");
include 'config/database.php';

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM client WHERE `email`='$email' AND `password`='$password'";
$result = $con->query($sql);

if ($result->rowCount() > 0) {
    $row = $result->fetch(PDO::FETCH_ASSOC);
    $clientData = array(
        'result' => 'success',
        'id' => $row['id'] // Include the client ID in the response
    );
    echo json_encode($clientData);
} else {
    echo json_encode(array('result' => 'failed'));
}
?>
