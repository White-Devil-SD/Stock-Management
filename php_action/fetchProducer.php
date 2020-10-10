<?php 	



require_once 'core.php';

$sql = "SELECT producers.producer_id, producers.producer_name,producers.producer_contact,producers.producer_address,producers.amount_paid,active,producers.status FROM producers
		WHERE producers.status = 1";

$result = $connect->query($sql);

$output = array('data' => array());

if($result->num_rows > 0) { 

 // $row = $result->fetch_array();
 $active = ""; 

 while($row = $result->fetch_array()) {
	 $producerId = $row[0];
	 $producerName =$row[1];
	 $producerContact =$row[2];
	 $producerAddress = $row[3];
	 $Amount = $row[4];
	 $producerStatus =$row[5];

 	// active 
 	if($row[5] == 1) {
 		// activate member
 		$active = "<label class='label label-success'>Available</label>";
 	} else {
 		// deactivate member
 		$active = "<label class='label label-danger'>Not Available</label>";
 	} // /else

 	$button = '<!-- Single button -->
	<div class="btn-group">
	  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    Action <span class="caret"></span>
	  </button>
	  <ul class="dropdown-menu">
	    <li><a type="button" data-toggle="modal" id="editProductModalBtn" data-target="#editProductModal" onclick="editProduct('.$producerId.')"> <i class="glyphicon glyphicon-edit"></i> Edit</a></li>
	    <li><a type="button" data-toggle="modal" data-target="#removeProductModal" id="removeProductModalBtn" onclick="removeProduct('.$producerId.')"> <i class="glyphicon glyphicon-trash"></i> Remove</a></li>       
	  </ul>
	</div>';

	
 	$output['data'][] = array( 		
 		// image
 		// product name
 		// rate
 		$row[1],
 		// quantity 
 		$row[2], 		 	
 		// brand
		 $row[3],
		 
		 $row[4],
 		// active
 		$active,
 		// button
 		$button 		
 		); 	
 } // /while 

}// if num_rows

$connect->close();

echo json_encode($output);