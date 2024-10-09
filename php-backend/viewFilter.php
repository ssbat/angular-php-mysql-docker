<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json");
// include database connection
include 'config/database.php';
 
// delete message prompt will be here
 
// $id=$_GET['id'];
$filters = $_GET;
$conditions = array();
$placeholders = array();
if (!empty($filters)) {
    foreach ($filters as $column => $values) {
        if ($column === 'price') {
            if (is_array($values)) {
                $rangeConditions = array();
                foreach ($values as $range) {
                    $priceRange = explode('-', $range);
                    $rangeConditions[] = "price BETWEEN ? AND ?";
                    $placeholders[] = $priceRange[0];
                    $placeholders[] = $priceRange[1];
                }
                $conditions[] = '(' . implode(' OR ', $rangeConditions) . ')';
            }
        }
        elseif ($column === 'brand') {
            if (is_array($values)) {
                $brandConditions = array();
                foreach ($values as $value) {
                    $brandConditions[] = "$column LIKE concat('%',concat(?,'%'))";
                    $placeholders[] = $value;
                }
                $conditions[] = '(' . implode(' OR ', $brandConditions) . ')';
            }}
            elseif ($column === 'processor') {
                if (is_array($values)) {
                    $brandConditions = array();
                    foreach ($values as $value) {
                        $brandConditions[] = "$column LIKE concat('%',concat(?,'%'))";
                        $placeholders[] = $value;
                    }
                    $conditions[] = '(' . implode(' OR ', $brandConditions) . ')';
                }}
        else {
            if (is_array($values)) {
                $conditions[] = "$column IN (" . implode(',', array_fill(0, count($values), '?')) . ")";
                $placeholders = array_merge($placeholders, $values);
            } else {
                $conditions[] = "$column = ?";
                $placeholders[] = $values;
            }
        }
    }
}

$whereClause = '';
if (!empty($conditions)) {
    $whereClause = 'WHERE ' . implode(" AND ", $conditions);
}

// $whereClause = implode(" AND ", $conditions);

// select all data
// select all data
$query = "SELECT * FROM laptops $whereClause";
$stmt = $con->prepare($query);
$stmt->execute($placeholders);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;

?>