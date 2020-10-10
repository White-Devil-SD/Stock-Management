<?php 	

require_once 'core.php';

$sql = "SELECT producer_id, producer_name FROM producers WHERE status = 1 AND active = 1";
$result = $connect->query($sql);

$data = $result->fetch_all();

$connect->close();

echo json_encode($data);