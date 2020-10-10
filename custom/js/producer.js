var manageProducerTable;

$(document).ready(function() {
	// top nav bar 
	$('#navProduct').addClass('active');
	// manage product data table
	manageProducerTable = $('#manageProducerTable').DataTable({
		'ajax': 'php_action/fetchProducer.php',
		'order': []
	});

	// add product modal btn clicked
	$("#addProductModalBtn").unbind('click').bind('click', function() {
		// // product form reset
		$("#submitProductForm")[0].reset();		

		// remove text-error 
		$(".text-danger").remove();
		// remove from-group error
		$(".form-group").removeClass('has-error').removeClass('has-success');

		// submit product form
		$("#submitProductForm").unbind('submit').bind('submit', function() {

			// form validation
			var producerName = $("#producerName").val();
            var producerContact =$("#contact").val();
            var producerAddress =$("#address").val();
            var Amount =$("#amount");
            var producerStatus =$("#producerStatus")


            if(producerName == "") {
				$("#producerName").after('<p class="text-danger">Producer Name field is required</p>');
				$('#producerName').closest('.form-group').addClass('has-error');
			}	else {
				// remov error text field
				$("#producerName").find('.text-danger').remove();
				// success out for form 
				$("#producerName").closest('.form-group').addClass('has-success');	  	
			}	// /else

			if(producerContact == "") {
				$("#contact").after('<p class="text-danger">Phone no field is required</p>');
				$('#contact').closest('.form-group').addClass('has-error');
			}	else {
				// remov error text field
				$("#contact").find('.text-danger').remove();
				// success out for form 
				$("#contact").closest('.form-group').addClass('has-success');	  	
			}	// /else

			if(producerAddress == "") {
				$("#address").after('<p class="text-danger">Address field is required</p>');
				$('#address').closest('.form-group').addClass('has-error');
			}	else {
				// remov error text field
				$("#address").find('.text-danger').remove();
				// success out for form 
				$("#address").closest('.form-group').addClass('has-success');	  	
			}	// /else

			if(Amount == "") {
				$("#amount").after('<p class="text-danger">Amount field is required</p>');
				$('#amount').closest('.form-group').addClass('has-error');
			}	else {
				// remov error text field
				$("#amount").find('.text-danger').remove();
				// success out for form 
				$("#amount").closest('.form-group').addClass('has-success');	  	
			}	// /else
           
            if(producerStatus == "") {
				$("#producerStatus").after('<p class="text-danger">Product Status field is required</p>');
				$('#producerStatus').closest('.form-group').addClass('has-error');
			}	else {
				// remov error text field
				$("#producerStatus").find('.text-danger').remove();
				// success out for form 
				$("#producerStatus").closest('.form-group').addClass('has-success');	  	
			}	// /else

			
			if( producerName && producerContact && producerAddress && Amount && producerStatus) {
				// submit loading button
				$("#createProductBtn").button('loading');

				var form = $(this);
				var formData = new FormData(this);

				$.ajax({
					url : form.attr('createProducer.php'),
					type: form.attr('POST'),
					data: formData,
					dataType: 'json',
					cache: false,
					contentType: false,
					processData: false,
					success:function(response) {

						if(response.success == true) {
							// submit loading button
							$("#createProductBtn").button('reset');
							
							$("#submitProductForm")[0].reset();

							$("html, body, div.modal, div.modal-content, div.modal-body").animate({scrollTop: '0'}, 100);
																	
							// shows a successful message after operation
							$('#add-product-messages').html('<div class="alert alert-success">'+
		            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
		            '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
		          '</div>');

							// remove the mesages
		          $(".alert-success").delay(500).show(10, function() {
								$(this).delay(3000).hide(10, function() {
									$(this).remove();
								});
							}); // /.alert

		          // reload the manage student table
							manageProducerTable.ajax.reload(null, true);

							// remove text-error 
							$(".text-danger").remove();
							// remove from-group error
							$(".form-group").removeClass('has-error').removeClass('has-success');

						} // /if response.success
						
					} // /success function
				}); // /ajax function
			}	 // /if validation is ok 					

			return false;
		}); // /submit product form

	}); // /add product modal btn clicked
	

	// remove product 	

}); // document.ready fucntion

function editProducer(producerId = null) {

	if(producerId) {
		$("#producerId").remove();		
		// remove text-error 
		$(".text-danger").remove();
		// remove from-group error
		$(".form-group").removeClass('has-error').removeClass('has-success');
		// modal spinner
		$('.div-loading').removeClass('div-hide');
		// modal div
		$('.div-result').addClass('div-hide');

		$.ajax({
			url: 'php_action/fetchSelectedProducer.php',
			type: 'post',
			data: {producerId: producerId},
			dataType: 'json',
			success:function(response) {		
			// alert(response.product_image);
				// modal spinner
				$('.div-loading').addClass('div-hide');
				// modal div
				$('.div-result').removeClass('div-hide');				

				
				// $("#editProductImage").fileinput({
		  //     overwriteInitial: true,
			 //    maxFileSize: 2500,
			 //    showClose: false,
			 //    showCaption: false,
			 //    browseLabel: '',
			 //    removeLabel: '',
			 //    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
			 //    removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
			 //    removeTitle: 'Cancel or reset changes',
			 //    elErrorContainer: '#kv-avatar-errors-1',
			 //    msgErrorClass: 'alert alert-block alert-danger',
			 //    defaultPreviewContent: '<img src="stock/'+response.product_image+'" alt="Profile Image" style="width:100%;">',
			 //    layoutTemplates: {main2: '{preview} {remove} {browse}'},								    
		  // 		allowedFileExtensions: ["jpg", "png", "gif", "JPG", "PNG", "GIF"]
				// });  

				// product id 
				$(".editProducerFooter").append('<input type="hidden" name="producerId" id="producerId" value="'+response.producer_id+'" />');				
				$(".editProducerPhotoFooter").append('<input type="hidden" name="producerId" id="producerId" value="'+response.producer_id+'" />');				
				
				// product name
				$("#editProducerName").val(response.producer_name);
				// quantity
				$("#editProducerContact").val(response.producer_contact);
				// rate
				$("#editProducerAddress").val(response.producer_address);
				// brand name
				$("#editAmount").val(response.amount_paid);
				// category name
				$("#editProducerStatus").val(response.active);
				// update the product data function
				$("#editProductForm").unbind('submit').bind('submit', function() {

					// form validation
					var producerName = $("#editProducerName").val();
					var producerContact = $("#editProducerContact").val();
					var producerAddress = $("#editProducerAddress").val();
                    var Amount = $("#amount").val();
                    var producerStatus = $("#editProducerStatus").val();
                    
					if(producerName == "") {
						$("#editProducerName").after('<p class="text-danger">Producer Name field is required</p>');
						$('#editProducerName').closest('.form-group').addClass('has-error');
					}	else {
						// remov error text field
						$("#editProducerName").find('.text-danger').remove();
						// success out for form 
						$("#editProducerName").closest('.form-group').addClass('has-success');	  	
					}	// /else

					if(producerContact == "") {
						$("#editProducerContact").after('<p class="text-danger">Quantity field is required</p>');
						$('#editProducerContact').closest('.form-group').addClass('has-error');
					}	else {
						// remov error text field
						$("#editProducerContact").find('.text-danger').remove();
						// success out for form 
						$("#editProducerContact").closest('.form-group').addClass('has-success');	  	
					}	// /else

					if(producerAddress == "") {
						$("#editProducerAddress").after('<p class="text-danger">Rate field is required</p>');
						$('#editProducerAddress').closest('.form-group').addClass('has-error');
					}	else {
						// remov error text field
						$("#editProducerAddress").find('.text-danger').remove();
						// success out for form 
						$("#editProducerAddress").closest('.form-group').addClass('has-success');	  	
					}	// /else

					if(Amount == "") {
						$("#Amount").after('<p class="text-danger">Brand Name field is required</p>');
						$('#Amount').closest('.form-group').addClass('has-error');
					}	else {
						// remov error text field
						$("#Amount").find('.text-danger').remove();
						// success out for form 
						$("#Amount").closest('.form-group').addClass('has-success');	  	
					}	// /else

                    if(producerStatus == "") {
						$("#editProducerStatus").after('<p class="text-danger">Product Status field is required</p>');
						$('#editProducerStatus').closest('.form-group').addClass('has-error');
					}	else {
						// remov error text field
						$("#editProducerStatus").find('.text-danger').remove();
						// success out for form 
						$("#editProducerStatus").closest('.form-group').addClass('has-success');	  	
					}	// /else					



					if(producerName && producerContact && producerAddress && Amount && producerStatus) {
						// submit loading button
						$("#editProductBtn").button('loading');

						var form = $(this);
						var formData = new FormData(this);

						$.ajax({
							url : form.attr('action'),
							type: form.attr('method'),
							data: formData,
							dataType: 'json',
							cache: false,
							contentType: false,
							processData: false,
							success:function(response) {
								console.log(response);
								if(response.success == true) {
									// submit loading button
									$("#editProductBtn").button('reset');																		

									$("html, body, div.modal, div.modal-content, div.modal-body").animate({scrollTop: '0'}, 100);
																			
									// shows a successful message after operation
									$('#edit-product-messages').html('<div class="alert alert-success">'+
				            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
				            '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
				          '</div>');

									// remove the mesages
				          $(".alert-success").delay(500).show(10, function() {
										$(this).delay(3000).hide(10, function() {
											$(this).remove();
										});
									}); // /.alert

				          // reload the manage student table
									manageProductTable.ajax.reload(null, true);

									// remove text-error 
									$(".text-danger").remove();
									// remove from-group error
									$(".form-group").removeClass('has-error').removeClass('has-success');

								} // /if response.success
								
							} // /success function
						}); // /ajax function
					}	 // /if validation is ok 					

					return false;
				}); // update the product data function

				// update the product image				
				
			} // /success function
		}); // /ajax to fetch product image

				
	} else {
		alert('error please refresh the page');
	}
} // /edit product function

// remove product 
function removeProducer(producerId = null) {
	if(producerId) {
		// remove product button clicked
		$("#removeProductBtn").unbind('click').bind('click', function() {
			// loading remove button
			$("#removeProductBtn").button('loading');
			$.ajax({
				url: 'php_action/removeProducer.php',
				type: 'post',
				data: {producerId: producerId},
				dataType: 'json',
				success:function(response) {
					// loading remove button
					$("#removeProductBtn").button('reset');
					if(response.success == true) {
						// remove product modal
						$("#removeProductModal").modal('hide');

						// update the product table
						manageProductTable.ajax.reload(null, false);

						// remove success messages
						$(".remove-messages").html('<div class="alert alert-success">'+
		            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
		            '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
		          '</div>');

						// remove the mesages
	          $(".alert-success").delay(500).show(10, function() {
							$(this).delay(3000).hide(10, function() {
								$(this).remove();
							});
						}); // /.alert
					} else {

						// remove success messages
						$(".removeProductMessages").html('<div class="alert alert-success">'+
		            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
		            '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
		          '</div>');

						// remove the mesages
	          $(".alert-success").delay(500).show(10, function() {
							$(this).delay(3000).hide(10, function() {
								$(this).remove();
							});
						}); // /.alert

					} // /error
				} // /success function
			}); // /ajax fucntion to remove the product
			return false;
		}); // /remove product btn clicked
	} // /if productid
} // /remove product function

function clearForm(oForm) {
	// var frm_elements = oForm.elements;									
	// console.log(frm_elements);
	// 	for(i=0;i<frm_elements.length;i++) {
	// 		field_type = frm_elements[i].type.toLowerCase();									
	// 		switch (field_type) {
	// 	    case "text":
	// 	    case "password":
	// 	    case "textarea":
	// 	    case "hidden":
	// 	    case "select-one":	    
	// 	      frm_elements[i].value = "";
	// 	      break;
	// 	    case "radio":
	// 	    case "checkbox":	    
	// 	      if (frm_elements[i].checked)
	// 	      {
	// 	          frm_elements[i].checked = false;
	// 	      }
	// 	      break;
	// 	    case "file": 
	// 	    	if(frm_elements[i].options) {
	// 	    		frm_elements[i].options= false;
	// 	    	}
	// 	    default:
	// 	        break;
	//     } // /switch
	// 	} // for
}