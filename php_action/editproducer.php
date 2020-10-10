<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {
	$producerId = $_POST['producerId'];
	$producerName 		= $_POST['editProducerName']; 
    $producerContact    =$_POST['editProducerContact'];
    $producerAddress    =$_POST['editProducerAddress'];
    $Amount    =$_POST['editAmount'];
    $producerStatus 	= $_POST['editProducerStatus'];

				
	$sql = "UPDATE producers SET producer_name = '$producerName', producer_contact = '$producerContact', producer_address = '$producerAddress', amount_paid = '$Amount',status = 1 WHERE producer_id = $producerId ";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Update";	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while updating product info";
	}

} // /$_POST
	 
$connect->close();

echo json_encode($valid);
 
