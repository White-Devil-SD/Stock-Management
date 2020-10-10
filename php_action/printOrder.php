<?php 	

require_once 'core.php';

$orderId = $_POST['orderId'];

$sql = "SELECT order_date, client_name, client_contact, sub_total, total_amount, discount, grand_total, paid, due FROM orders WHERE order_id = $orderId";

$orderResult = $connect->query($sql);
$orderData = $orderResult->fetch_array();

$orderDate = $orderData[0];
$clientName = $orderData[1];
$clientContact = $orderData[2]; 
$subTotal = $orderData[3];
$totalAmount = $orderData[4]; 
$discount = $orderData[5];
$grandTotal = $orderData[6];
$paid = $orderData[7];
$due = $orderData[8];
$orderId = $orderId;


$orderItemSql = "SELECT order_item.product_id, order_item.rate, order_item.quantity, order_item.total,
product.product_name FROM order_item
	INNER JOIN product ON order_item.product_id = product.product_id 
 WHERE order_item.order_id = $orderId";
$orderItemResult = $connect->query($orderItemSql);
$table = '

<div>
<h5 align="right">
<p style="margin-top:-15px;">Mob:9591591908</p>
<p align="left" style="margin-top:-30px;">GSTIN:29BTSPA2031D1Z0</p>
<p align="left" style="margin-top:-10px;">Bill Number: '.$orderId.' </p>
</h5>
<h3 align="center">VISHU EMPORIUM
<p  style="font-size:15px; margin-top:10px;">Near Bus stand,Aldur </p>
<p  style="font-size:15px; margin-top:-10px;">Chickmagalur ( D & T ), 577111</p>
</h3>
</div>
 <table border="1" cellspacing="0" cellpadding="20" width="100%">
	<thead>
		<tr >
			<th colspan="5">

			<center>
				
				<center>Customer Name : '.$clientName.'</center>
				Contact : '.$clientContact.'
				<center>Order Date : '.$orderDate.'</center>
			</center>		
			</th>
				
		</tr>		
	</thead>
</table>
<table border="0" width="100%;" cellpadding="5" style="border:1px solid black;border-top-style:1px solid black;border-bottom-style:1px solid black;>

	<tbody>
		<tr   style=" border-left: 6px solid green;
		height: auto; margin-lefft: 20px;">
			<th>S.no</th>
			<th>Product</th>
			<th>Rate</th>
			<th>Quantity</th>
			<th>Total</th>
		</tr>';

		$x = 1;
		while($row = $orderItemResult->fetch_array()) {			
						
			$table .= '<tr>
				<th>'.$x.'</th>
				<th>'.$row[4].'</th>
				<th>'.$row[1].'</th>
				<th>'.$row[2].'</th>
				<th>'.$row[3].'</th>
			</tr>
			';
		$x++;
		} // /while

		$table .= '<tr>
			<th></th>
		</tr>

		<tr>
			<th></th>
		</tr>
		<table border="0" width="100%;" cellpadding="5" style="border:1px solid black;border-top-style:1px solid black;border-bottom-style:1px solid black;">
		<tr>
			<th>Sub Amount</th>
			<th>'.$subTotal.'</th>			
		</tr>

		<tr>
			<th>Total Amount</th>
			<th>'.$totalAmount.'</th>			
		</tr>	

		<tr>
			<th>Discount</th>
			<th>'.$discount.'</th>			
		</tr>

		<tr>
			<th>Grand Total</th>
			<th>'.$grandTotal.'</th>			
		</tr>

		<tr>
			<th>Paid Amount</th>
			<th>'.$paid.'</th>			
		</tr>

		<tr>
			<th>Due Amount</th>
			<th>'.$due.'</th>			
		</tr>

	</tbody>
</table>
 

<h5 align="right">
<p style="margin-top:120px; font-size:20px;"></p>Signature
</h5>

<h3 align="center">
<p style="margin-top:50px"></p>Thankyou for Shopping,Have a great Time.
</h3>



';
$connect->close();

echo $table;