<?php 	

require_once 'core.php';


$valid['success'] = array('success' => false, 'messages' => array());

$producerId = $_POST['producerId'];

if($producerId) { 

 $sql = "UPDATE producers SET active = 2, status = 2 WHERE producer_id = {$producerId}";

 if($connect->query($sql) === TRUE) {
 	$valid['success'] = true;
	$valid['messages'] = "Successfully Removed";		
 } else {
 	$valid['success'] = false;
 	$valid['messages'] = "Error while remove the brand";
 }
 
 $connect->close();

 echo json_encode($valid);
 
} // /if $_POST