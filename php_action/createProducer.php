<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	

	$producerName 		= $_POST['producerName'];
  $producerContact 			= $_POST['producerContact'];
  $producerAddress 					= $_POST['producerAddress'];
  $Amount 			=       $_POST['Amount'];
  $producerStatus 			= $_POST['producerStatus'];
  

  $sql = "INSERT INTO producers (producer_name, producer_contact, producer_address,amount_paid, active, status) 
  VALUES ('$producerName','$producerContact', '$producerAddress', '$Amount', 1, '$producerStatus')";

  if($connect->query($sql) === TRUE) {
    $valid['success'] = true;
    $valid['messages'] = "Successfully Added";	
  } else {
    $valid['success'] = false;
    $valid['messages'] = "Error while adding the members";
  }



	$connect->close();

	echo json_encode($valid);
 
} // /if $_POST