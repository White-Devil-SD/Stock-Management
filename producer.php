<?php require_once 'php_action/db_connect.php' ?>
<?php require_once 'includes/header.php'; ?>

<div class="row">
	<div class="col-md-12">

		<ol class="breadcrumb">
		  <li><a href="dashboard.php">Home</a></li>		  
		  <li class="active">Customer</li>
		</ol>

		<div class="panel panel-default">
			<div class="panel-heading">
				<div class="page-heading"> <i class="glyphicon glyphicon-edit"></i> Manage Customers</div>
			</div> <!-- /panel-heading -->
			<div class="panel-body">

				<div class="remove-messages"></div>

				<div class="div-action pull pull-right" style="padding-bottom:20px;">
					<button class="btn btn-default button1" data-toggle="modal" id="addProductModalBtn" data-target="#addProductModal"> <i class="glyphicon glyphicon-plus-sign"></i> Add Customer </button>
				</div> <!-- /div-action -->				
				
				<table class="table" id="manageProducerTable">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Contact</th>							
							<th>Address</th>
              <th>Amount</th>
							<th style="width:15%;">Options</th>
						</tr>
					</thead>
				</table>
				<!-- /table -->

			</div> <!-- /panel-body -->
		</div> <!-- /panel -->		
	</div> <!-- /col-md-12 -->
</div> <!-- /row -->


<!-- add product -->
<div class="modal fade" id="addProductModal" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">

    	<form class="form-horizontal" id="submitProductForm" action="php_action/createProducer.php" method="POST" enctype="multipart/form-data">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title"><i class="fa fa-plus"></i> Add Details</h4>
	      </div>
      
          <div class="modal-body" style="max-height:450px; overflow:auto;">

<div id="add-product-messages"></div>


<div class="form-group">
  <label for="producerName" class="col-sm-3 control-label">Customer Name: </label>
  <label class="col-sm-1 control-label">: </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="producerName" placeholder="Producer Name" name="producerName" autocomplete="off">
      </div>
</div> <!-- /form-group-->	    

<div class="form-group">
  <label for="contact
  " class="col-sm-3 control-label">Customer Contact: </label>
  <label class="col-sm-1 control-label">: </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="contact" placeholder="Contact No" name="contact" autocomplete="off">
      </div>
</div> <!-- /form-group-->	        	 

<div class="form-group">
  <label for="address
  " class="col-sm-3 control-label">Customer Address: </label>
  <label class="col-sm-1 control-label">: </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="address" placeholder="Producer Address" name="address" autocomplete="on">
      </div>
</div> <!-- /form-group-->	        	 


<div class="form-group">
  <label for="amount
  " class="col-sm-3 control-label">Amount Paid: </label>
  <label class="col-sm-1 control-label">: </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="amount" placeholder="Amount Paid" name="amount" autocomplete="off">
      </div>
</div> <!-- /form-group-->	        	 


<div class="form-group">
  <label for="producerStatus" class="col-sm-3 control-label">Status: </label>
  <label class="col-sm-1 control-label">: </label>
      <div class="col-sm-8">
        <select class="form-control" id="producerStatus" name="producerStatus">
            <option value="">~~SELECT~~</option>
            <option value="1">Available</option>
            <option value="2">Not Available</option>
        </select>
      </div>
</div> <!-- /form-group-->	         	        
</div> <!-- /modal-body -->

<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal"> <i class="glyphicon glyphicon-remove-sign"></i> Close</button>

<button type="submit" class="btn btn-primary" id="createProductBtn" data-loading-text="Loading..." autocomplete="off"> <i class="glyphicon glyphicon-ok-sign"></i> Save Changes</button>
</div> <!-- /modal-footer -->	      

      
        </form>
    </div>
   </div>
</div>
    <script src="custom/js/producer.js"></script>

<?php require_once 'includes/footer.php'; ?>